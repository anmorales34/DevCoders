import React from "react";
import Login from "./pages/Login";
import Index from "./pages/administrador/Index";
import PerfilAdmin from "./pages/administrador/perfil";
import MaestroUsuarios from "./pages/administrador/maestroUsuarios";
import MaestroProyecto from "./pages/administrador/maestroProyecto";
import ProyectoAprob from "./pages/administrador/proyectoAprob";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutLogin from "./layouts/layoutLogin";
import LayoutProyect from "./layouts/layoutProyect";
import LayoutAdmin from "./layouts/layoutAdmin";
import MaestroEquipos from "./pages/administrador/maestroEquipos";
import "./styles/login.css";
import "./styles/admin.css";
import "./styles/proyectos.css";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path={[
              "/administrador",
              "/administrador/equipos",
              "/administrador/proyectos",
              "/administrador/proyectos-aprob",
              "/administrador/usuarios",
              "/administrador/perfil",
            ]}
          >
            <LayoutAdmin>
              <Switch>
                <Route path="/administrador/perfil">
                  <PerfilAdmin />
                </Route>
                <Route path="/administrador/usuarios">
                  <MaestroUsuarios />
                </Route>
                <Route path="/administrador/proyectos">
                  <MaestroProyecto />
                </Route>
                <Route path="/administrador/proyectos-aprob">
                  <ProyectoAprob />
                </Route>
                <Route path="/administrador/equipos">
                  <MaestroEquipos />
                </Route>
                <Route path="/administrador">
                  <Index titulo="Inicio" />
                </Route>
              </Switch>
            </LayoutAdmin>
          </Route>
          <Route path={["/"]}>
            <LayoutLogin>
              <Switch>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </LayoutLogin>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
