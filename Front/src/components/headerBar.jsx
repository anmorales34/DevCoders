import React from "react";

const HeaderBar = props => {
  return (
    <div>
      <header className="header-bar">
        <h1>{props.titulo} </h1>
      </header>
    </div>
  );
};

export default HeaderBar;
