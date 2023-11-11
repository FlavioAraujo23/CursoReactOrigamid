import React from 'react';
import { GlobalContext } from './GlobalContext';
// importo apenas o contexto para ser usado

const ProdutoReal = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setCarrinho((carrinho) => carrinho + 1);
  }

  return (
    <p>
      Total: {global.carrinho}: <button onClick={handleClick}>Adicionar</button>
    </p>
  );
};

export default ProdutoReal;