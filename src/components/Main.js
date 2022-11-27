import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Catálogo de productos" />} />
        <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
