// App.jsx
import React, { useState } from 'react';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import Item from './componentes/Item';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

function App() {
  const [showCatalog, setShowCatalog] = useState(false);
  const [cart, setCart] = useState([]);

  const handleCatalogClick = () => {
    setShowCatalog(!showCatalog);
  };

  const addToCart = (productName) => {
    setCart([...cart, productName]);
  };

  const productos = [
    { id: "a", name: "Basic Blanca", description: "Descripción del producto A", price: 7000 },
    { id: "b", name: "Basic Negra", description: "Descripción del producto B", price: 7000 },
    { id: "c", name: "Basic Desgastada", description: "Descripción del producto C", price: 7000 },
    { id: "d", name: "Basic Roja", description: "Descripción del producto D", price: 7000 },
  ];

  return (
    <ChakraProvider>
      <CSSReset />
      <NavBar onCatalogClick={handleCatalogClick} />
      <ItemListContainer greeting={"Bienvenido a Nullaby"} />
      {showCatalog &&
        productos.map((producto) => (
          <Item
            key={producto.id}
            name={producto.name}
            description={producto.description}
            price={producto.price}
            onAddToCartClick={() => addToCart(producto.name)}
          />
        ))}
      <img src="" alt="Descripción de la imagen" />
    </ChakraProvider>
  );
}

export default App;
