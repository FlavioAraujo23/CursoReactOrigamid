import './App.css'
import { useState } from 'react';
import Modal from './components/Modal';
import ButtonModal from './components/ButtonModal';


function App() {
// useState
const [on, setOn] = useState(true);
// O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.
// Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.
// O uso de setNome é uma convenção do React para a função de modificação do estado

const [modal, setModal] = useState(false);

// Reatividade
// Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.
const [items, setItems] = useState(['Item 1', 'Item 2']);
function handleClickReativo() {
  // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
  // é importante ter esse cuidado para arrays e objetos
  setItems([...items, 'Novo Item']);
}
//   Callback
// Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retonado na função.
const [ativo, setAtivo] = useState(true);
function handleClick() {
  // usando um callback
  setAtivo((anterior) => !anterior);
}
// Callback Valor Inicial
// A definição do estado inicial também pode ser feita com um callback.
const [ativo2, setAtivo2] = useState(() => {
  const ativoLocal = window.localStorage.getItem('ativo');
  return ativoLocal;
});

  return (
    <>
    {/*
    Estado
    O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc. */}
    <button disabled={!ativo}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>

    {/*
    Hooks
    Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes. */}
    <button onClick={() => setOn(!ativo)}>
      {on ? 'Botão Ativo' : 'Botão Inativo'}
    </button>

    {/* Props
    Podemos passar o estado e a função de modificação como propriedades para outros elementos. */}
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>

    {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <button onClick={handleClickReativo}>Adicionar Reativo</button>
      <button onClick={handleClick}>
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
    </>
  )
}

export default App
