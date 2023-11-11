import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  // children são todos os elementos que estão envolvidos pelo componente
  const [carrinho, setCarrinho] = React.useState(0);

  return (
    <GlobalContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </GlobalContext.Provider>
  );
};