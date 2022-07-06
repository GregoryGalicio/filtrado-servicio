import React from "react";
import "./Footer.css";

const Footer = ({darkMode}) => {
  return (
    <div className={darkMode?'main-footerDark':"main-footer"}>
      <div className="container">
        <div className="row"></div>
       
        <div className="row">
          <p className={darkMode?"footDark":"foot"} >
            &copy;{new Date().getFullYear()} Design by Gregory Galicio | Todos los
            derechos reservados |
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;