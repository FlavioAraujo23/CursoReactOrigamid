import React from 'react';
import UserContext from './UserContext';

// useContext
// O useContext é o hook que deve ser utilizado para consumirmos o contexto e termos assim acesso aos dados de value. Devemos passar o contexto criado como seu agumento.
const Produto = () => {
  const user = React.useContext(UserContext);

  return <p>Produto de: {user.nome}</p>;
};

export default Produto;