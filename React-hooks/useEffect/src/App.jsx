import { useEffect, useState } from 'react';
import Produto from './components/produto';

// useEffect
// Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.

function App() {
  const [contar, setContar] = useState(0);
//   Array de Dependências
// No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências. A lista de dependências serve para informarmos quando o efeito deve ocorrer.

  // Uma Array vazia indica que o efeito não possui nenhum dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // O efeito ocorre logo após a renderização do mesmo
 useEffect(() => {
    console.log('Apenas quando renderiza');
  }, []);

  // Antes de renderizar e toda vez que atualizar o componente
  console.log('Sempre ocorre, mas antes do useEffect');

  // Agora a dependência está no estado contar,
  // assim sempre que contar for atualizar este efeito será ativado
  useEffect(() => {
    console.log('Toda vez que atualiza o contar');
  }, [contar]);

//   Dependências Obrigatórias
// Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.
  const titulo = 'Clicou ';
  useEffect(() => {
    document.title = titulo + contar;
    // O ESLint irá indicar que você possui uma dependência não declarada (contar)
  }, []);


//   Componente Montou
// O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.
  const [dados, setDados] = useState(null);
  useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);


//   Múltiplos Efeitos
// Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setContar(0);
  }, [modal]);


  // Antes de Desmontar
  // As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito.
  const [ativo, setAtivo] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setContar(contar + 1)}>
          {contar}
        </button>
      </div>
      <div>
        {dados && (
          <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco * contar}</p>
          </div>
        )}
        {modal && <p>Meu Modal</p>}
        <button onClick={() => setModal(!modal)}>Modal</button>
      </div>
      <div>
        <p>Meu App</p>
        <button onClick={() => setAtivo(!ativo)}>Abrir</button>
        {ativo && <Produto />}
      </div>
    </>
  )
}

export default App
