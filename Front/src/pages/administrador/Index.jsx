import React from "react";
import HeaderBar from "../../components/headerBar";
import MenuBar from "../../components/menuBar";

const Index = () => {
  return (
    <div>
      <HeaderBar titulo="Inicio" class="header-bar" classButton="btn-off" />
      <MenuBar
        menuB="Informacion General"
        routeB="/administrador"
        btnB="btn-active"
        btnB2="btn-off"
      />
      <div className="container-index">
        <div className="proyectos">
          <div className="my-proyects">
            <h1 className="tit-proy">Mis Proyectos</h1>
            <div className="item-project">
              <div className="head-project">
                <h2 className="tit-project">Metodología de investigación</h2>
                <button>
                  <i class="fas fa-chevron-down"></i>
                </button>
              </div>

              <div className="progress">
                <div className="skills proj1">32%</div>
              </div>
            </div>
            <div className="item-project">
              <div className="head-project">
                <h2 className="tit-project">
                  Nuevas tecnologías de la comunicación
                </h2>
                <button>
                  <i class="fas fa-chevron-down"></i>
                </button>
              </div>

              <div className="progress">
                <div className="skills proj2">18%</div>
              </div>
            </div>
            <div className="item-project">
              <div className="head-project">
                <h2 className="tit-project">
                  Desarrollo de aplicación de gestión de proyectos
                </h2>
                <button>
                  <i class="fas fa-chevron-down"></i>
                </button>
              </div>

              <div className="progress">
                <div className="skills proj3">64%</div>
              </div>
            </div>
            <div className="item-project">
              <div className="head-project">
                <h2 className="tit-project">
                  Desarrollo de BackEnd y servidores
                </h2>
                <button>
                  <i class="fas fa-chevron-down"></i>
                </button>
              </div>

              <div className="progress">
                <div className="skills proj4">91%</div>
              </div>
            </div>
          </div>
          <div className="hours-worked">
            <h1 className="tit-proy">Horas trabajadas</h1>
            <div className="avance">
              <div className="fecha">Fecha: 12/08/2021</div>
              <div className="horas">horas: 4.5</div>
              <div className="proyecto">
                Proyecto: Metodología de investigación
              </div>
            </div>
            <div className="avance">
              <div className="fecha">Fecha: 11/08/2021</div>
              <div className="horas">horas: 7.5</div>
              <div className="proyecto">
                Proyecto: Nuevas tecnologías de la comunicación
              </div>
            </div>
            <div className="avance">
              <div className="fecha">Fecha: 10/08/2021</div>
              <div className="horas">horas: 8.5</div>
              <div className="proyecto">
                Proyecto: Desarrollo de aplicación de gestión de proyectos
              </div>
            </div>
            <div className="avance">
              <div className="fecha">Fecha: 9/08/2021</div>
              <div className="horas">horas: 2.5</div>
              <div className="proyecto">
                Proyecto: Desarrollo de BackEnd y servidores
              </div>
            </div>
            <div className="avance">
              <div className="fecha">Fecha: 9/08/2021</div>
              <div className="horas">horas: 4.5</div>
              <div className="proyecto">
                Proyecto: Metodología de investigación
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
