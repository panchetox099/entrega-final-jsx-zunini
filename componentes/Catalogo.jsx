import React, { useState } from 'react';
import NavBar from './NavBar'; // Asumiendo que NavBar contiene el botón "Catálogo"
import Item from './Item';

const App = () => {
  const [showCatalog, setShowCatalog] = useState(false);

  const handleShowCatalog = () => {
    setShowCatalog(!showCatalog);
  };

  return (
    <div>
      <NavBar onCatalogClick={handleShowCatalog} />
      {showCatalog && <Item name="Ejemplo de Producto" price="19.99" />}
    </div>
  );
}

export default App;
