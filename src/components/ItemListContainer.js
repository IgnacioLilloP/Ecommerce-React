import React, { useState, useEffect } from "react";
import "./styles.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "./firebase";
import Load from "./Spinner";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const db = getFirestore();
      const itemCollection = db
        .collection("productos")
        .where("category", "==", `${categoryId}`);
      itemCollection
        .get()
        .then((querySnapshot) => {
          setProducts(
            querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      const db = getFirestore();
      const itemCollection = db.collection("productos");
      itemCollection
        .get()
        .then((querySnapshot) => {
          setProducts(
            querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);

  return (
    <div className="main m-4">
      <h2>{greeting}</h2>
      <div className="itemListContainer m-5">
        { loading ? <Load /> : <ItemList products={products} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
