import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <div className="welcome">
        <div className="welcome-txt">
          <h1>Optimiza tu proyecto.</h1>
          <h1>Trabaja en Project-Pedia.</h1>
          <p>
            Project-Pedia es una plataforma de gerencia que te permitira
            organizar tus proyectos, administrar tus equipos de trabajo y llevar
            un registro completo de tu presupuesto. Con Project-Pedia, tu
            proyecto nunca fue tan facil de supervisar.
          </p>
        </div>
        <div className="welcome-img"></div>
      </div>
      <div className="marketing-tit">
        <h1>
          "Crea, Gestiona, Organiza y Administra tu proyecto de la manera más
          eficiente!"
        </h1>
      </div>

      <div className="galery-pic">
        <div className="galery">
          <div className="pic-1"></div>
          <div className="pic-2"></div>
          <div className="pic-3"></div>
        </div>
        <div className="register">
          <div className="register-form">
            <form action="" className="registro-form">
              <div className="registro-container">
                <h1 className="registro-tit">Regístrate</h1>
                <p>
                  Por favor complete todos los campos para crear una cuenta.
                </p>
                <hr />
                <label htmlFor="nombre">
                  <b>Nombre</b>
                </label>
                <input
                  type="text"
                  placeholder="Ingrese su Nombre"
                  name="nombre"
                  id="input-regist"
                  required
                />
                <label htmlFor="apellido">
                  <b>Apellido</b>
                </label>
                <input
                  type="text"
                  placeholder="Ingrese su Apellido"
                  name="apellido"
                  id="input-regist"
                  required
                />
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Ingrese Correo"
                  name="email"
                  id="input-regist"
                  required
                />

                <label htmlFor="psw">
                  <b>Contraseña</b>
                </label>
                <input
                  type="password"
                  placeholder="Ingrese Contraseña"
                  name="psw"
                  id="input-regist"
                  required
                />

                <label htmlFor="psw-repeat" className="psw-label">
                  <b>Repita la Contraseña</b>
                </label>
                <input
                  type="password"
                  placeholder="Repita la Contraseña"
                  name="psw-repeat"
                  id="input-regist"
                  required
                />

                <label className="recuerdame-label">
                  <input
                    type="checkbox"
                    name="recuerdame"
                    className="recuerdame-check"
                    required
                  />
                  Recuérdame
                </label>

                <p className="politica">
                  Al hacer clic en "Registrarse", aceptas nuestras{" "}
                  <a href="https://www.misiontic2022.gov.co/portal/Secciones/Mision-TIC-2022/">
                    Condiciones, la Política de datos y la Política de cookies
                  </a>
                  . Es posible que te enviemos notificaciones por SMS, que
                  puedes desactivar cuando quieras.
                </p>
                <div className="registro-btn">
                  <button type="submit" className="signbtn">
                    Registrarse
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="galery">
          <div className="pic-4"></div>
          <div className="pic-5"></div>
          <div className="pic-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
