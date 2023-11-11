import React from 'react';


export const GlobalContext = React.createContext();

export const Global = ({ children }) => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  function limparDados() {
    setProduto(null);
  }

  return (
    <GlobalContext.Provider value={{ produto, setProduto, limparDados }}>
      {children}     
    </GlobalContext.Provider>
  );
};