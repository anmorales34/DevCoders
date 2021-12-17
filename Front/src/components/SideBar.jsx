import React from "react";
import { Link } from "react-router-dom";

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
              <li className="sidebar-item">
                <Link to="/administrador" className="item-link">
                  <i class="fas fa-home"></i> Inicio
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/administrador/proyectos" className="item-link">
                  <i class="fas fa-tasks"></i> Proyectos
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/administrador/equipos" className="item-link">
                  <i class="fas fa-sitemap"></i> Equipos
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/administrador/usuarios" className="item-link">
                  <i class="fas fa-users"></i> Usuarios
                </Link>
              </li>
            </ul>
          </div>
          <div className="settings">
            <ul className="sidebar-list">
              <li className="sidebar-item">
                <Link to="/administrador/perfil" className="item-link">
                  <i class="fas fa-cog"></i> Configuración
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/administrador/perfil" className="item-link">
                  <i class="far fa-question-circle"></i> Ayuda
                </Link>
              </li>
            </ul>
          </div>
          <div className="perfil">
            <div className="dropdown profile">
              <button className="dropbtn">
                <i className="fas fa-user-circle"></i>
                Hola, Christian
              </button>
              <div className="dropdown-content">
                <a href="/administrador">Mi perfil</a>
                <a href="/administrador">Configuración</a>
                <a href="/administrador">Ayuda y soporte</a>
                <a href="/">Log out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
