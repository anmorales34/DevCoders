import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="social-media">
          <div className="logo-footer">
            <div className="logof">
              <i class="fas fa-book-reader fa-3x"></i>
              <h1 className="logo-title">PP</h1>
            </div>

            <h1 className="logo-title">Project-Pedia</h1>
          </div>
          <div className="social">
            <h1>SOCIAL</h1>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
          </div>
        </div>
        <div className="documents">
          <div className="documentacion">
            <h1>Documentación</h1>
            <p>
              Hemos creado una documentación completa para Project-Pedia, la
              cual es actualizada y guardada en GitHub
            </p>
            <button className="github">Ver en GitHub</button>
          </div>
          <div className="help">
            <h1>Ayuda y soporte</h1>
            <p>
              Le damos la bienvenida a cualquier colaborador que quiera
              contribuir al proyecto y a ayudarnos a hacer de Project-Pedia lo
              mas versatil posible. Hemos creado una guía en GitHub para
              reportar bugs y solicitar nuevas funcionalidades.
            </p>
            <button className="github">Ver en GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
