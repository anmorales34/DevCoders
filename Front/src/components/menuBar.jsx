import React from "react";

const MenuBar = props => {
  return (
    <div>
      <menu className="menu-bar">
        <h1>{props.menu} </h1>
      </menu>
    </div>
  );
};

export default MenuBar;
