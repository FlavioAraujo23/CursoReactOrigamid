import React from 'react'
import Home from './components/Home';
import Header from './components/Header';
import Produtos from './components/Produtos';
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {
  let Pagina;
  const {pathname} = window.location

  if(pathname === '/produtos'){
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }
  return (
    <>
      <Header />
      <Pagina />
    </>
    
  )
}

export default App