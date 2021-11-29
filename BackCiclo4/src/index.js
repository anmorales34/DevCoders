const { ApolloServer, gql } = require("apollo-server");
const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");
const { DB_URI, DB_NAME } = process.env;
const bcrypt = require("bcryptjs");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    misProyectos: [Proyecto!]!
  }

  type user {
    id: ID!
    email: String!
    identificacion: String!
    nombre: String!
    password: String!
    rol: String!
  }

  type Proyecto {
    id: ID!
    nombre: String!
    objGeneral: String!
    objEspecifico: String!
    presupuesto: String!
    fechaIni: String!
    fechaFin: String!
    user: [user!]!
  }

  type Mutation {
    signUp(input: SignUpInput): AuthUser!
  }

  input SignUpInput {
    email: String!
    identificacion: String!
    nombre: String!
    password: String!
    rol: String!
  }

  type AuthUser {
    user: user!
    token: String!
  }
`;

const misProyectos = [
  {
    id: 10,
    nombre: "App de ventas",
    objGeneral: "Crear una app de ventas",
    objEspecifico: "Crear una interfaz de usuario",
    presupuesto: "5.000.000",
    fechaIni: "15/12/2021",
    fechaFin: "15/4/2022",
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    misProyectos: () => [],
  },
  //Mutations

  Mutation: {
    signUp: async (root, { input }, { db }) => {
      const hashedPassword = bcrypt.hashSync(input.password);
      const newUser = {
        ...input,
        password: hashedPassword,
      };

      const result = await db.collection("user").insertOne(newUser);
      //Funcion asincronica que puede recibir 3 argumentos y regresa un objeto
      const user = result.ops[0];

      return {
        user,
        token: "token",
      };
    },
  },
  user: {
    id: root => {
      return root._id;
    },
  },
};

const start = async () => {
  const client = new MongoClient(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db(DB_NAME);

  const context = {
    db,
  };

  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({ typeDefs, resolvers, context });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

start();
