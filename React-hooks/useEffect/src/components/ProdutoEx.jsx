import React, { useEffect, useState } from 'react'

const ProdutoEx = ({ produto }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    if(produto !== null){
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then((response) => response.json())
      .then((result) => setDados(result))
      
    }
  }, [produto]);

  if (dados === null) return null;
  
  return (
    <div>
      <h1>{dados.id}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  )
}

export default ProdutoEx