import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Produto = () => {
//   useParams
// O hook useParams terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro.
  const params = useParams();

//   useLocation
// Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.
  const location = useLocation();

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log(search.get('q'));
    console.log('Toda vez que a rota mudar');
  }, [location]);
  
  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  )
}

export default Produto