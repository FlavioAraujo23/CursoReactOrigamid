
function App() {
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  return (
    <>
    {/* Atributos podem ser passados como no HTML, porém com alguns casos especiais. O caso especial mais comum é o atributo class. Pelo fato de class ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className. */}
    <div className="grid">Origamid</div>;
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>

    {/* O style irá receber um objeto com as propriedades do elemento em camelCase. */}
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: 'green' }}>Sempre aberta</p>
    </>
  )
}

export default App
