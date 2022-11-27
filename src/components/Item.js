import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles.css";

function Item({ data }) {
  return (
    <Card style={{ width: "20rem" }} className="card">
      <Card.Img variant="top" className="fondo" src={data.urlPicture} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>

        <Card.Text>${data.price}</Card.Text>
        <Button variant="dark">
          <Link to={`/detalle/${data.id}`} className="link">
            Comprar
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
