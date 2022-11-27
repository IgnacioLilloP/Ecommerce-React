import React, { useState } from "react";
import "./styles.css";
import botonmas from "../img/bx-plus-circle.svg";
import botonmenos from "../img/bx-minus-circle.svg";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="numero">
      <div className="m-2">
        <button className="btnsumres" onClick={() => restar()}>
          <img className="btnpx" src={botonmenos} alt="boton menos" />
        </button>
        {counter}
        <button className="btnsumres" onClick={() => sumar()}>
          <img className="btnpx" src={botonmas} alt="boton mas" />
        </button>
      </div>
      <Button variant="dark" onClick={() => onAdd(counter)}>
        Agregar Producto
      </Button>
    </div>
  );
};

export default ItemCount;
