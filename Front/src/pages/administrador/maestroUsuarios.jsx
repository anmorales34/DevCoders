import React from "react";
import HeaderBar from "../../components/headerBar";
import MenuBar from "../../components/menuBar";

const MaestroUsuarios = () => {
  return (
    <div>
      <HeaderBar
        titulo="Usuarios"
        class="proyecto-header"
        classButton="btn-off"
      />
      <MenuBar
        menuB="Todos los usuarios"
        routeB="/administrador/usuarios"
        btnB="btn-active"
        btnB2="btn-off"
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="id">Usuario ID</th>
            <th className="id">Nombre</th>
            <th>Identificacion</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0101</td>
            <td>Carlos García</td>
            <td>1.022.031.754</td>
            <td>carlos.garcia@gmail.com</td>
            <td>Estudiante</td>

            <td>
              <select name="estado" className="estado-usuario">
                <option value="0">Estado</option>
                <optgroup>
                  <option value="1">Aprobado</option>
                  <option value="2">Pendiente</option>
                  <option value="3">No Aprobado</option>
                </optgroup>
              </select>
            </td>
          </tr>
          <tr>
            <td>0104</td>
            <td>Juliana López</td>
            <td>1.152.421.414</td>
            <td>jualiana123@gmail.com</td>
            <td>Estudiante</td>

            <td>
              <select name="estado" className="estado-usuario">
                <option value="0">Estado</option>
                <optgroup>
                  <option value="1">Aprobado</option>
                  <option value="2">Pendiente</option>
                  <option value="3">No Aprobado</option>
                </optgroup>
              </select>
            </td>
          </tr>
          <tr>
            <td>0114</td>
            <td>Juan Marín</td>
            <td>1.001.789.962</td>
            <td>marin-juan@gmail.com</td>
            <td>Líder</td>

            <td>
              <select name="estado" className="estado-usuario">
                <option value="0">Estado</option>
                <optgroup>
                  <option value="1">Aprobado</option>
                  <option value="2">Pendiente</option>
                  <option value="3">No Aprobado</option>
                </optgroup>
              </select>
            </td>
          </tr>
          <tr>
            <td>0100</td>
            <td>Christian Jimenez</td>
            <td>1.078.041.446</td>
            <td>jimenex0608@gmail.com</td>
            <td>Administrador</td>

            <td>
              <select name="estado" className="estado-usuario">
                <option value="0">Estado</option>
                <optgroup>
                  <option value="1">Aprobado</option>
                  <option value="2">Pendiente</option>
                  <option value="3">No Aprobado</option>
                </optgroup>
              </select>
            </td>
          </tr>
          <tr>
            <td>0102</td>
            <td>Andrés Morales</td>
            <td>1.102.411.954</td>
            <td>andmorales123@gmail.com</td>
            <td>Administrador</td>

            <td>
              <select name="estado" className="estado-usuario">
                <option value="0">Estado</option>
                <optgroup>
                  <option value="1">Aprobado</option>
                  <option value="2">Pendiente</option>
                  <option value="3">No Aprobado</option>
                </optgroup>
              </select>
            </td>
          </tr>
          <tr>
            <td>0112</td>
            <td>Samuel Galvis</td>
            <td>1.000.041.954</td>
            <td>galvis954@gmail.com</td>
            <td>Lider</td>

            <td>
              <select name="estado" className="estado-usuario">
                <option value="0">Estado</option>
                <optgroup>
                  <option value="1">Aprobado</option>
                  <option value="2">Pendiente</option>
                  <option value="3">No Aprobado</option>
                </optgroup>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MaestroUsuarios;
