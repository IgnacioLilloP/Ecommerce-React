import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "./firebase";
import Load from "./Spinner";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    const item = itemCollection.doc(itemId);
    item
      .get()
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="itemDetailContainer">
      {loading ? <Load/> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
