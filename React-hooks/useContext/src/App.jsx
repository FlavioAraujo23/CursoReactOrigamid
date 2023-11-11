import React from 'react';
import Produto from './components/Produto';
import UserContext from './components/UserContext';

function App() {
//   createContext
// O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades. Serve principalmente para dodos/estados globais como por exemplo dados do usuário logado.
// **O contexto foi criado no arquivo UserContext.jsx

  return (
    <>
      {/* Provider
  O método Provider deve ser utilizado para envolver todos os elementos que terão acesso aos dados do Context. Provider recebe uma propriedade chamada value, dentro dela que devemos informar os dados do contexto. */}
     <UserContext.Provider value={{ nome: 'Flávio' }}>
      <Produto />
    </UserContext.Provider>
    </>
  )
}

export default App
