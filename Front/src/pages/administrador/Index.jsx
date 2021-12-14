import React from "react";
import HeaderBar from "../../components/headerBar";
import MenuBar from "../../components/menuBar";

const Index = () => {
  return (
    <div>
      <HeaderBar titulo="Inicio" />
      <MenuBar menu="Información general" />
      <h1>Este es el container</h1>
    </div>
  );
};

export default Index;
