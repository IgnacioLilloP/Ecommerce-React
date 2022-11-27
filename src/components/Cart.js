import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./CustomProvider";
import "./styles.css";
import { getFirestore } from "./firebase";
import firebase from "firebase/compat/app";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Webpay from "../img/webpay.png";
import Paypal from "../img/logo-Paypal.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Cart = () => {
  const { cart, removeItem, clear, totalCarrito } = useContext(contexto);
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  useEffect(() => {
    setTotal(totalCarrito());
  }, [totalCarrito]);

  const terminarCompra = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const orders = db.collection("orders");

    const orden = {
      buyer: {
        name: nameRef.current.value,
        mobile: mobileRef.current.value,
        email: emailRef.current.value,
      },
      items: cart,
      total: total,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    orders
      .add(orden)
      .then(({ id }) => {
        console.log("orden ingresada: " + id);
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        clear();
      });
  };

  return (
    <div>
      {orderId &&
        MySwal.fire({
          title: (
            <strong>
              Compra exitosa! <br /> Tú id de compra es:
            </strong>
          ),
          html: <i>{orderId}</i>,
          icon: "success",
        }).then(function () {
          window.location.href = "/";
        })}
      {cart.length === 0 ? (
        <>
          <h2 className="m-5">Carrito Vacio...</h2>
          <h1>
            <Link to="/">Ver Catálogo</Link>
          </h1>
        </>
      ) : (
        <>
          <div className="cartCard">
            <Table>
              <thead>
                <tr>
                  <th>Cantidad</th>
                  <th>Producto</th>
                  <th>Total</th>
                  <th>Acción</th>
                </tr>
              </thead>
              {cart.map((i) => (
                <tbody striped key={i.id} className="align-middle">
                  <tr>
                    <td>{i.cantidad}</td>
                    <td>
                      <img src={i.urlPicture} alt="" className="imagenlista" />
                    </td>
                    <td>${i.price * i.cantidad}</td>
                    <td>
                      <Button variant="danger" onClick={() => removeItem(i.id)}>
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
            <h2>Total: ${total}</h2>
            <div>
              <Button
                className="m-md-3 "
                variant="dark"
                onClick={() => clear()}
              >
                Vaciar Carrito
              </Button>
              <Button variant="success" onClick={handleShow}>
                Realizar Pedido
              </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Rellena tus datos</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={terminarCompra}>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          required
                        />
                        <label className="form-label" for="validationDefault01">
                          Nombre
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          ref={nameRef}
                          required
                        />
                        <label className="form-label" for="validationDefault02">
                          Apellidos
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      ref={emailRef}
                      required
                    />
                    <label className="form-label" for="validationDefault03">
                      Correo Electronico
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example4"
                      className="form-control"
                      ref={mobileRef}
                      required
                    />
                    <label className="form-label" f for="validationDefault04">
                      Teléfono
                    </label>
                  </div>
                  <div className="centrar gap-5">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                        required
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        <img
                          src={Webpay}
                          className="imagencompra"
                          alt=""
                          for="validationDefault05"
                        />
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                        required
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        <img
                          src={Paypal}
                          className="imagencompra"
                          alt=""
                          for="validationDefault05"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4 mt-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                    />
                    <label className="form-check-label" for="form2Example33">
                      ¡Suscríbete a nuestro boletín mensual!
                    </label>
                  </div>

                  <div className="modal-footer centrar">
                    <button
                      type="submit"
                      className="btn btn-success"
                      data-dismiss="modal"
                    >
                      Finalizar Compra
                    </button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
