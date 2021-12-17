import React from "react";
import HeaderBar from "../../components/headerBar";
import MenuBar from "../../components/menuBar";

const proyectoAprob = () => {
  return (
    <div>
      <HeaderBar
        titulo="Proyectos"
        funcion="Nuevo Proyecto"
        class="proyecto-header"
        classButton="btn-proyect"
      />
      <MenuBar
        menuB="Todos los proyectos"
        routeB="/administrador/proyectos"
        btnB="btn-active"
        menuB2="Proyectos aprobados"
        routeB2="/administrador/proyectos-aprob"
        btnB2="btn-active"
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="id">Proyecto ID</th>

            <th>Título</th>
            <th className="lider">Líder</th>
            <th>Objetivos</th>
            <th className="presupuesto">Presupuesto</th>
            <th>Avance</th>
            <th className="fase">Fase de proyecto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>71728</td>

            <td>Desarrollo de aplicación de gestión de proyectos</td>
            <td>Luis Alvarez</td>
            <td>
              <ul>
                <li>Carlos Garcia</li>
                <li>Juan Lopez</li>
                <li>Sara Galvis</li>
                <li>Camila Lopez</li>
              </ul>
            </td>
            <td>13.240.000</td>
            <td>
              <div className="progress">
                <div className="skills proj1">32%</div>
              </div>
            </td>
            <td>
              <select name="Fase" className="fase-proy">
                <option value="0">Fase</option>
                <optgroup>
                  <option value="1">En desarrollo</option>
                  <option value="2">Terminado</option>
                </optgroup>
              </select>
            </td>
          </tr>
          <tr>
            <td>74562</td>

            <td>Desarrollo de BackEnd y servidores</td>
            <td>Carlos Ardila</td>
            <td>
              <ul>
                <li>Luis Murillo</li>
                <li>Juan Galvis</li>
                <li>Laura Gutierrez</li>
                <li>Samuel Lopez</li>
              </ul>
            </td>
            <td>15.840.000</td>
            <td>
              <div className="progress">
                <div className="skills proj3">64%</div>
              </div>
            </td>
            <td>
              <select name="Fase" className="fase-proy">
                <option value="0">Fase</option>
                <optgroup>
                  <option value="1">En desarrollo</option>
                  <option value="2">Terminado</option>
                </optgroup>
              </select>
            </td>
          </tr>
          <tr>
            <td>65412</td>

            <td>Nuevas tecnologías de la comunicación</td>
            <td>Andrea Rocha</td>
            <td>
              <ul>
                <li>Andres Correa</li>
                <li>Jessica Lopez</li>
                <li>Nestor Gaviria</li>
                <li>Ana Jimenez</li>
              </ul>
            </td>
            <td>9.440.000</td>
            <td>
              <div className="progress">
                <div className="skills proj4">91%</div>
              </div>
            </td>
            <td>
              <select name="Fase" className="fase-proy">
                <option value="0">Fase</option>
                <optgroup>
                  <option value="1">En desarrollo</option>
                  <option value="2">Terminado</option>
                </optgroup>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <button className="btn btn--left">
          <i class="fas fa-chevron-left"></i>
        </button>

        <button className="num num-1">1</button>
        <button className="num num-2">2</button>
        <button className="num num-3">3</button>
        <button className="num num-4">4</button>
        <button className="num num-5">5</button>
        <button className="num num-6">6</button>
        <span>...</span>
        <button className="num num-7">23</button>

        <button className="btn btn--right">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default proyectoAprob;
