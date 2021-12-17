import React from "react";
import MenuButtons from "./menuButtons";

const MenuBar = props => {
  return (
    <div>
      <menu className="menu-bar">
        <MenuButtons
          menu={props.menuB}
          route={props.routeB}
          menubtn={props.btnB}
        />

        <MenuButtons
          menu={props.menuB2}
          route={props.routeB2}
          menubtn={props.btnB2}
        />
      </menu>
    </div>
  );
};

export default MenuBar;
