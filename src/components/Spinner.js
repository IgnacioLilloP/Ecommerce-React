import Spinner from "react-bootstrap/Spinner";

function Load() {
  return (
    <div>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h2>Cargando...</h2>
    </div>
  );
}

export default Load;
