import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Pagina404 from './Pagina404';

// BrowserRouter, Routes e Route
// O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router. O Routes define a área em que vamos colocar os nossos Route. O Route recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de element={}.
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 404 - Não Encontrado
            O * renderiza um elemento para todas as rotas que não foram definidas em path. Uso ideal para mostrarmos um componente indicando que a página não existe. */}
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
};