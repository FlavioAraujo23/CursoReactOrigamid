import React from "react";

function App() {

  const [mensagem, setMensagem] = React.useState('');
  const [select, setSelect] = React.useState('smartphone');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setRadio(target.value);
  }
  return (
    <>
    {/* Textarea
No React o textarea é utilizado como um input, uma tag única sem abertura/fechamento e com o value para definir o seu valor interno. */}
  <form>
      <textarea
        id="mensagem"
        value={mensagem}
        rows="5"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <p>{mensagem}</p>

      {/* Select
O value e onChange são definidos no select. Para definir um valor inicial, coloque o mesmo no useState. */}
      {/* Selecione
Defina o primeiro valor como disabled e com uma string pura, assim o usuário terá que selecionar um valor. */}
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>

      {/* Radio
// No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked. O que retornar true irá marcar o botão. */}
      {/*  Diferentes Grupos
 Defina um estado para cada grupo. */}
      <h2>Dispositivo</h2>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={produto === 'notebook'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={produto === 'smartphone'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Smartphone
      </label>

      <h2>Cor</h2>
      <label>
        <input
          type="radio"
          value="azul"
          checked={cor === 'azul'}
          onChange={({ target }) => setCor(target.value)}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="vermelho"
          checked={cor === 'vermelho'}
          onChange={({ target }) => setCor(target.value)}
        />
        Vermelho
      </label>
    </form>
    </>
  )
}

export default App
