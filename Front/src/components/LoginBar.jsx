import React from "react";
import { Link } from "react-router-dom";

const LoginBar = () => {
  return (
    <div>
      <menu className="menu-login">
        <div className="menu-top">
          <div className="logo">
            <i class="fas fa-book-reader fa-3x"></i>
            <h1 className="logo-title">PP</h1>
          </div>

          <form className="login-form">
            <div className="email">
              <div>
                <input
                  className="input"
                  type="email"
                  placeholder="Ingrese correo"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="password">
              <div>
                <input
                  className="input"
                  type="password"
                  placeholder="Contraseña"
                  id="password"
                  required
                />
              </div>
            </div>
            <div className="recuerdame">
              <input className="check-box" type="checkbox" id="recuerdame" />
              <span>Recuerdame</span>
            </div>
            <div>
              <span>¿Olvidaste tu </span>
              <Link to="/" className="forgot">
                contraseña?
              </Link>
            </div>

            <button type="submit" id="btn-login">
              <Link to="/administrador" className="link-login">
                Inicia Sesión
              </Link>
            </button>
          </form>
        </div>
      </menu>
    </div>
  );
};

export default LoginBar;
