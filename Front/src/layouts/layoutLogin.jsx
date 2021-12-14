import React from "react";
import LoginBar from "../components/LoginBar";
import Footer from "../components/footer";

const layoutLogin = ({ children }) => {
  return (
    <div>
      <div>
        <LoginBar />
        <main>{children} </main>
        <Footer />
      </div>
    </div>
  );
};

export default layoutLogin;
