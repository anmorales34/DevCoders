import React from "react";

const HeaderBar = props => {
  return (
    <div>
      <header className={props.class}>
        <h1>{props.titulo} </h1>
        <button className={props.classButton}>{props.funcion} </button>
      </header>
    </div>
  );
};

export default HeaderBar;
