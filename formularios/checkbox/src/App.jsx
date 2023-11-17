import React from "react"

function App() {
  const [checkbox, setCheckbox] = React.useState(false);
  const [cores, setCores] = React.useState([]);
  // Múltiplos
  // Podemos definir um estado para cada item ou uma array que irá conter todos os itens selecionados.
  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }
  function handleChecked(cor) {
    return cores.includes(cor);
  }
  return (
     <>
     {/* Checkbox
 O estado do checkbox está relacionado ao checked. */}
      <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecked('verde')}
          onChange={handleChange}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleChecked('amarelo')}
          onChange={handleChange}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleChecked('roxo')}
          onChange={handleChange}
        />
        Roxo
      </label>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>

    </>
  )
}

export default App
