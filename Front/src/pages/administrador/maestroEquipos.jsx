import React from "react";
import HeaderBar from "../../components/headerBar";
import MenuBar from "../../components/menuBar";

const MaestroEquipos = () => {
  return (
    <div>
      <HeaderBar
        titulo="Equipos"
        class="proyecto-header"
        classButton="btn-off"
      />
      <MenuBar
        menuB="Todos los equipos"
        routeB="/administrador/equipos"
        btnB="btn-active"
        btnB2="btn-off"
      />
      <div className="flip-card">
        <div className="cards">
          <div className="card-front">
            <div className="profile-head"></div>
            <h1 className="title-name"> Proyecto 1 </h1>
          </div>
          <div className="card-back">
            <div className="customer-box">
              <h1>Equipo </h1>
            </div>
            <div className="customer-information">
              <p> Juan Carlos Garcia </p>
              <p>Samuel Lopez </p>

              <p>Camila Alvarez </p>
              <p>Daniel Garavito </p>
            </div>

            <button>
              <p className="contact">Contact</p>
              <div className="email">
                <div className="icons">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaestroEquipos;
