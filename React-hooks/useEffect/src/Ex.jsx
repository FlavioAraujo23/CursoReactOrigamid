import React, { useEffect, useState } from 'react'
import ProdutoEx from './components/ProdutoEx';
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
const Ex = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, [])

  useEffect(() => {
    if(produto !== null) {
      window.localStorage.setItem('produto', produto)
    }
  }, [produto]);
  

  function handleClick({target}) {
    setProduto(target.innerText)
  }

  return (
    <div>
      <h1>Preferencia: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <ProdutoEx produto={produto}/>
    </div>
  )
}

export default Ex