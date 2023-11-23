import React from 'react'
import { Routes, Route, useLocation, useParams, NavLink, Outlet } from 'react-router-dom';
import ProdutoCustomizado from './nested_routes/ProdutoCustomizado';
import ProdutoAvaliacao from './nested_routes/ProdutoAvaliacao';
import ProdutoDescricao from './nested_routes/ProdutoDescricao';

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
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      {/* Outlet
        Outra forma é definindo todos as rotas diretamente no App e utilizar o component Outlet para mostrarmos a rota. */}
      <Outlet />
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  )
}

export default Produto