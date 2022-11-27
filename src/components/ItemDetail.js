import React, { useContext, useState } from "react";
import "./styles.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { contexto } from "./CustomProvider";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ItemDetail = ({ product }) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const { addItem } = useContext(contexto);

  const onAdd = (cantidad) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <strong>Ítem añadido al carrito</strong>,
      icon: "success",
    });
    addItem(product, cantidad);
    setIrAlCarrito(true);
  };

  return (
    <div>
      <Card style={{ width: "20rem" }} className="card">
        <Card.Img variant="top" className="fondo" src={product.urlPicture} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          {irAlCarrito ? (
            <Button variant="dark">
              <Link to="/cart" className="link">
                Ir a Carrito
              </Link>
            </Button>
          ) : (
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
