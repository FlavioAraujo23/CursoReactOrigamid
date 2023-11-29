import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contato from "./components/Contato";
import Produto from './components/Produto';
import NavBar from './components/NavBar';
import './App.css';

function App() {
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        
      </BrowserRouter>

    </div>
  )
}

export default App
