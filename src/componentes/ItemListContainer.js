import React from "react";

const ItemListContainer = ({greeting}) => {
     return(
<div className="container mx-auto">
<div className="hero hero-h" style={{ backgroundImage: `url("img/H1.jpeg")` }}>
  <div className="hero-overlay bg-opacity-"></div>
  <div className="hero-content  text-neutral-content">
    <div className="max-w-md text-black">
      <h1 className="mb-5 text-6xl font-thin">{greeting}</h1>
      <p className="mb-5"></p>
    </div>
  </div>
</div>
</div>  
     )

    
}

export default ItemListContainer