import React from "react";
import HeaderBar from "../components/headerBar";
import MenuBar from "../components/menuBar";
import SideBar from "../components/SideBar";

const layoutProyect = ({ children }) => {
  return (
    <div>
      <div className="general-layout">
        <nav>
          <SideBar />
        </nav>
        <main>
          <HeaderBar />
          <MenuBar />
          <div className="container-admin">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default layoutProyect;
