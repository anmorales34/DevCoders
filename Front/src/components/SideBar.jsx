import React from "react";

const SideBar = () => {
  return (
    <div>
      <div className="side-bar">
        <div className="nav-logo">
          <i class="fas fa-book-reader fa-3x"></i>
          <h1 className="logo-title">PP</h1>
        </div>
        <div className="sidebar-interior">
          <div className="nav-options">
            <ul className="sidebar-list">
              <li className="sidebar-item">Inicio</li>
              <li className="sidebar-item">Proyectos</li>
              <li className="sidebar-item">Equipos</li>
              <li className="sidebar-item">Usuarios</li>
            </ul>
          </div>
          <div className="settings">
            <ul className="sidebar-list">
              <li className="sidebar-item">Configuracion</li>
              <li className="sidebar-item">Ayuda</li>
            </ul>
          </div>
          <div className="perfil">
            <span className="profile-item">Perfil</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
