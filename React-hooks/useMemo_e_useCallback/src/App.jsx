import React from 'react';
import './App.css'

function App() {
//   useMemo
// Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependências.
// Serve para casos em que você faz uma operação lenta para retornar um valor.
// geralmente é algo matematico como fazer uma soma de arrays com milhares de numeros
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto');
    // só será executado uma vez
    console.log('teste');
    return localStorageItem;
  }, []);
  console.log(valor);


//   useCallback
// Permite definirmos um callback e uma lista de dependências do callback. Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback.
const handleClick = React.useCallback(() => {
  setContar((contar) => contar + 1);
}, []);

  return (
    <>
    <div>
      <button onClick={() => setContar(contar + 1)}>{valor}</button>
      <button onClick={handleClick}>{contar}</button>
    </div>

    </>
  )
}

export default App
