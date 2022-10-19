import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
     return(
      <>
  <div className="navbar bg-base-100 colornav">
  <div className="navbar-start font-medium" >
  <div class="flex-none ">
    <ul class="menu menu-horizontal p-0 ">
      <li><a>Inicio</a></li>
      <li tabindex="0">
        <a>
          Catálogo
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul classname="p-2 bg-base-100 colornav" >
          <li><a>Solar</a></li>
          <li><a>Cuarzo</a></li>
          <li><a>Mecanico</a></li>
        </ul>
      </li>
      <li><a>Nosotros</a></li>
    </ul>
  </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-5xl">One O'clock</a>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end mr-10">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
          <CartWidget/>
          </label>
          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow colornav">
            <div className="card-body">
              <span className="font-bold text-lg">0 Items</span>
              <span className="">Subtotal: $0</span>
              <div className="card-actions">
                <button className="btn btn-black text-white btn-block">Ver Carrito</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 colornav">
            <li>
              <a className="justify-between">
                Perfil
              </a>
            </li>
            <li><a>Configuración</a></li>
            <li><a>Cerrar Sesión</a></li>
          </ul>
        </div>
  </div>
</div>
    </>
     
     )

    
}

export default NavBar