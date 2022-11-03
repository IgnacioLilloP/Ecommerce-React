import React from "react";

const Footer = () => {
    return(
        <>
        <footer className="footer p-10 bg-base-200 text-base-content colorfooter">
        <div>
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"/>
          <p>One O'clock.<br/>Dando la hora desde 1980</p>
        </div> 
        <div>
          <span className="footer-title">Servicios</span> 
          <a className="link link-hover">Limpieza</a> 
          <a className="link link-hover">Mantención</a> 
          <a className="link link-hover">Correas</a> 
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Compañia</span> 
          <a className="link link-hover">Nosotros</a> 
          <a className="link link-hover">Contacto</a> 
          <a className="link link-hover">Trabajo</a> 
          <a className="link link-hover">Ubicación</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Devoluciones</a> 
          <a className="link link-hover">Politica de privacidad</a> 
          <a className="link link-hover">Politica de Cookies</a>
        </div>
      </footer>
      </>
    )
}

export default Footer