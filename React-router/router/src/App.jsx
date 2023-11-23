import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pagina404 from './components/Pagina404';
import Header from './components/Header';
import Produto from './components/Produto';
import Login from './components/Login';
import ProdutoDescricao from './components/nested_routes/ProdutoDescricao';
import ProdutoAvaliacao from './components/nested_routes/ProdutoAvaliacao';
import ProdutoCustomizado from './components/nested_routes/ProdutoCustomizado';

// BrowserRouter, Routes e Route
// O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router. O Routes define a área em que vamos colocar os nossos Route. O Route recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de element={}.
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 404 - Não Encontrado
              O * renderiza um elemento para todas as rotas que não foram definidas em path. Uso ideal para mostrarmos um componente indicando que a página não existe. */}
          <Route path="*" element={<Pagina404 />} />
          {/* Rota Dinâmica
              O uso de :nome irá definir uma rota dinâmica, onde o nome poderá ser utilizado como uma variável dentro do componente. Serve para buscarmos rotas dinâmicas como produto/notebook ou produto/smartphone. */}
           <Route path="produto/:id/*" element={<Produto />}>
            {/* o asteristico significa que a rota pode ser produto/id/ qualquer nome */}
            <Route path="/" element={<ProdutoDescricao />} />
            <Route path="avaliacao" element={<ProdutoAvaliacao />} />
            <Route path="customizado" element={<ProdutoCustomizado />} />
           </Route>
          {/*  Nested Routes
          Utilizamos nested routes quando precizamos de rotas dentro de rotas. Como por exemplo: perfil/editar e perfil/certificados e etc. Utilize o \* para definir que existem outras rotas dentro. */}
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};