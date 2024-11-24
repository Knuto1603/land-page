import React from "react";
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="container-fluid" id="banner">
      <div class="separar-horinzontal-50">
        <div class="alinear-horinzontal">
          <a
            href="https://www.facebook.com/lasdeliciasdemafer/"
            target="_blank"
          >
            <i class="bi bi-facebook icon-style facebook"></i>
          </a>
          <i class="bi bi-instagram icon-style instagram"></i>
          <a href="https://wa.link/h776ml" target="_blank">
            <i class="bi bi-whatsapp icon-style whatsapp"></i>
          </a>
        </div>
        <div class="alinear-horinzontal">
          <a href="#logo">
            <div class="logo brand"></div>
          </a>

          <div className="brand-logo brand">
            <a href="#logo" class="no-style">
              Las Delicias de Mafer
            </a>
          </div>
        </div>
        <div class="alinear-horinzontal">
          <i class="bi bi-heart-fill icon-style heart"></i>
        </div>
      </div>
      
    </div>
  );
};
