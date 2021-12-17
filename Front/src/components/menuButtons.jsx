import React from "react";
import { Link } from "react-router-dom";

function MenuButtons(props) {
  return (
    <button className={props.menubtn}>
      <Link to={props.route} className="link-menu">
        {props.menu}
      </Link>
    </button>
  );
}

export default MenuButtons;
