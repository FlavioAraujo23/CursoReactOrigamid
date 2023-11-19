import React from "react";
import Radio from "./components/Radio";

function App() {

  const [pergunta, setPergunta] = React.useState(0);
  const [resposta, setResposta] = React.useState('');
  const [respostasCertas, setRespostasCertas] = React.useState(0);
  const [mostrar, setMostrar] = React.useState(false);

  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

  function handleInit(event){
    event.preventDefault();
    setMostrar(false);
    setRespostasCertas(0);
    setPergunta(0);
  }

  function handleSubmit(event){
    event.preventDefault();
    if(pergunta < perguntas.length -1){
      setPergunta(pergunta + 1);
      if( resposta === perguntas[pergunta].resposta) {
        setRespostasCertas(respostasCertas + 1);
      }
    } else {
      setPergunta(9)
      setMostrar(true);
    }


  }
  return (
    <>
      {pergunta < perguntas.length  && <div>
        <h2>{perguntas[pergunta].pergunta}</h2>
          <form onSubmit={handleSubmit}>
            <Radio options={perguntas[pergunta].options} value={resposta} setValue={setResposta}/>
          </form>
        </div>
      }

      {pergunta > perguntas.length && 
      <input type="submit" value={'Voltar ao inicio'} onClick={handleInit} />
      }
      
      {mostrar ?
       <p>{`VOCÊ ACERTOU ${respostasCertas} DE 4`}</p> :
       <input type="submit" value={'Proxima pergunta'} onClick={handleSubmit} />
      }


    </>
  )
}

export default App
