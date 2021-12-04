const { ApolloServer, gql } = require('apollo-server');
const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
dotenv.config();
const { DB_URI, DB_NAME, JWT_SECRET } = process.env;

//Verificación de Autenticación Por Token
const getToken = (user) => jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30 days' });

//Creación de Metodo getUserFromToken para las mutaciones que lo requieren
const getUserFromToken = async (token, db) => {
  //if (!token) { return null }
  const tokenData = jwt.verify(token, JWT_SECRET); 
  if (!tokenData?.id) {
    return null;
  }
  return await db.collection('user').findOne({ _id: ObjectId(tokenData.id) }); 
}


//Resolvers
const resolvers = {
    //Query: {
      //misProyectos: () => []
  //},
  Query: {
    myTaskLists: async (_, __, { db, user }) => {  
      if (!user) { throw new Error('Error de Autenticación, por favor inicie Sesión'); }
      return await db.collection('TaskList')   
                                .find({ userIds: user._id })
                                .toArray();
    },

    getTaskList: async(_, { id }, { db, user }) => { 
      if (!user) { throw new Error('Error de Autenticación, por favor inicie Sesión'); }
      return await db.collection('TaskList').findOne({ _id: ObjectId(id) });
    }
  },

//Mutationes
Mutation: {
    signUp: async(root,{input},{db})=>{ 
        const hashedPassword=bcrypt.hashSync(input.password) 
        const newUser={ 
            ...input,
            password:hashedPassword,
        }
    const result= await db.collection("user").insertOne(newUser);  
    return{  
        user:newUser,
        token:getToken(newUser),
    }
},

signIn: async(root,{input},{db})=>{    
    const user = await db.collection('user').findOne({ email: input.email }); 
    const isPasswordCorrect = user && bcrypt.compareSync(input.password, user.password); 
    if (!user || !isPasswordCorrect) {  
      throw new Error('Credenciales erroneas :('); 
    } 
    return {
      user,
      token: getToken(user), 
    }
  },

createTaskList: async(root,{title},{db, user})=>{    
    if(!user){console.log("No esta autenticado, por favor inicie sesión.")} 
    const newTaskList={  
        title,
        createdAt: new Date().toISOString(),
        userIds:[user._id], 
        userNames: [user.nombre]
    }
    console.log("Tarea Creada Correctamente") 
    const result= await db.collection("TaskList").insertOne(newTaskList); 
    return newTaskList 
},

updateTaskList : async(_, {id, title}, {db, user}) =>{   
    if(!user){console.log("No esta autenticado, por favor inicie sesión.")}  
    const result= await db.collection("TaskList") 
                        .updateOne({_id:ObjectId(id)  
                        },{
                            $set:{title}  
                        }
    )
console.log("Tarea Actualizada Correctamente")
return await db.collection("TaskList").findOne({_id:ObjectId(id)});  
},

deleteTaskList : async(_, {id}, {db, user}) =>{   
    if(!user){console.log("No esta autenticado, por favor inicie sesión.")} 

    await db.collection("TaskList").remove({_id:ObjectId(id)}); 
    console.log("Tarea Eliminada Correctamente")
    return true; 
},


addUserToTaskList: async(_, {taskListId , userId}, {db,user}) =>{
  if(!user){console.log("No esta autenticado, por favor inicie sesión.")}  
  const taskList= await db.collection("TaskList").findOne({_id:ObjectId(taskListId)});
  const usuario= await db.collection("user").findOne({_id:ObjectId(userId)});

  if(!taskList){
    return null; 
  }
 
  if(taskList.userIds.find((dbId) => dbId.toString()=== userId.toString())){
    return taskList;  
  }
  await db.collection("TaskList")
          .updateOne({  
          _id:ObjectId(taskListId)
        }, { 
          $push: {
            userIds: ObjectId(userId),  
            userNames:usuario.nombre,  
          }
        })  
        taskList.userIds.push(ObjectId(userId))  
        taskList.userNames.push(usuario.nombre)  
        return taskList;
},

//ToDos (avances)
createToDo: async(root,{content, taskListId}, {db, user})=>{
if(!user){console.log("No esta autenticado, por favor inicie sesión.")}  
const newToDo ={
  content,
  taskListId: ObjectId(taskListId),
  isCompleted: false,
}
const result= await db.collection("ToDo").insertOne(newToDo);
return newToDo;
},

updateToDo: async (_, data, {db, user})=>{
  if(!user){console.log("No esta autenticado, por favor inicie sesión.")}  

  const result= await db.collection("ToDo")
                        .updateOne({_id:ObjectId(data.id)
                        }, {
                          $set: data
                        })
  return await db.collection("ToDo").findOne({_id:ObjectId(data.id)});
},



},

//Parametros inmutables del user
user:{
id:(root)=>{
    return root._id;}
},

//Parametros inmutables de los tasklist
TaskList: {
    id: ({ _id, id }) => _id || id, 
    progress: async ({_id}, _, {db}) =>{
      const todos= await db.collection("ToDo").find({taskListId: ObjectId(_id)}).toArray()
      const completed= todos.filter(todo =>todo.isCompleted);
      if (todos.length===0){
        return 0;
      }
      return (completed.length/todos.length)*100
    },

    users: async ({ userIds }, _, { db }) => Promise.all(   
      userIds.map((userId) => (  
        db.collection('user').findOne({ _id: userId})) 
      )
    ),
    todos: async ({_id}, _, {db})=>(
      await db.collection("ToDo").find({taskListId:ObjectId(_id)}).toArray()
    ),
  },


//Parametros inmutables del user
ToDo:{
  id:(root)=>{
    return root._id;},
  taskList: async ({taskListId}, _, {db}) =>(
  await db.collection("TaskList").findOne({_id:ObjectId(taskListId)})
  )
},

}

const start = async () => {  
    const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db(DB_NAME);
  
    const server = new ApolloServer({   
      typeDefs, 
      resolvers, 
      context: async ({ req }) => {
        const user = await getUserFromToken(req.headers.authorization, db);
        console.log(user)
        return {
          db,  
          user, 
        }
      },
    });

    // Metodo listen, servidor iniciado
    server.listen().then(({ url }) => {
    console.log(`🚀  Servidor listo y corriendo en ${url}`);
    });
  }  
start();  //Arrancamos!


  //Esquemas para GRAPHL vs MongoDB
  const typeDefs = gql`   
  type Query {
    myTaskLists: [TaskList!]!
    getTaskList(id: ID!): TaskList
  }
  
  type user{
      id: ID!
      mail: String!
      identificacion: String!
      nombre: String!
      password: String!
      rol: String!
  } 
  
  type proyectos{
      id: ID!
      nombre: String!
      objGenerales: String!
      objEspecicos: String!
      prespuesto: String!
      fechain: String!
      fechafi: String!
      user:[user!]!
  }
  
  type Mutation{
    signUp(input:SignUpInput):AuthUser!
    signIn(input:SignInInput):AuthUser!
    createTaskList(title: String!):TaskList!
    updateTaskList(id:ID!, title:String!):TaskList!
    deleteTaskList(id:ID!):Boolean!
    addUserToTaskList(taskListId: ID!, userId: ID!): TaskList
    createToDo(content:String!, taskListId:ID!):ToDo!
    updateToDo(id:ID!,content:String, isCompleted:Boolean):ToDo!
  }
  input SignUpInput{
    mail: String!
    identificacion: String!
    nombre: String!
    password: String!
    rol: String!
  }
  input SignInInput{
    mail: String!
    password: String!
  }
  type AuthUser{
      user:user!
      token: String!
  }
  type TaskList{
    id: ID!
    createdAt: String!
    title: String!
    progress: Float!
    users: [user!]!
    todos:[ToDo!]!
}
type ToDo{
    id: ID!
    content: String!
    isCompleted: Boolean!
    taskList: TaskList!
}
  `;