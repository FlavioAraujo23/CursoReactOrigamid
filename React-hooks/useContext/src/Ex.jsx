import React from 'react'
import { GlobalContext } from './GlobalContextEx.jsx';
// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

const Ex = () => {
  const contexto = React.useContext(GlobalContext);
  console.log(contexto)


  return (
    <div>
      <h1>Dados do fetch</h1>
      <p>{contexto.produto}</p>


      <button>dad</button>

    </div>
  )
}

export default Ex