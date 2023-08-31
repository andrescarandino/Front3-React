import React, { useState, useEffect } from 'react';

const PizzaOrder = (props) => {
  const [isOrderLoaded, setIsOrderLoaded] = useState(false);

  useEffect(() => {
    console.log('El componente fue montado');

    const timeoutId = setTimeout(() => {
      setIsOrderLoaded(true);
      console.log('Pedido cargado');
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      console.log('El componente fue desmontado');
    };
  }, []);

  useEffect(() => {
    console.log('El componente fue actualizado');
  });

  const handleCancelOrder = () => {
    alert('Pedido cancelado');
  };

  return (
    <div>
      <h1>¡Bienvenido a la Pizzería!</h1>
      {isOrderLoaded ? (
        <div>
          <p>Tu pedido de pizza está listo.</p>
          <button onClick={handleCancelOrder}>Cancelar Pedido</button>
        </div>
      ) : (
        <p>Cargando tu pedido...</p>
      )}
    </div>
  );
};

export default PizzaOrder;
