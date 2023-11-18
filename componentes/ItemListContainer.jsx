import React, { useEffect, useState } from 'react';
import Item from './Item'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  return (
    <>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        productos.map((producto) => (
          <Item
            key={producto.id}
            name={producto.name}
            description={producto.description}
            price={producto.price}
          />
        ))
      )}
    </>
  );
}








export default ItemListContainer;
