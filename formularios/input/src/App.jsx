import React from "react";

function App() {
//   Reatividade
// Para criarmos campos de formulário reativos, devemos definir o estado para o value e a função atualizadora para o onChange.
  const [nome, setNome] = React.useState('');

//   Múltiplos Campos
// Podemos definir um estado para cada campo.
  const [email, setEmail] = React.useState('');

//   Objeto
// Podemos definir um objeto que irá conter todos os valores dos campos do formulário.
const [form, setForm] = React.useState({
  nome: '',
  email: '',
});

function handleChange({ target }) {
  const { id, value } = target;
  setForm({ ...form, [id]: value }); // os colchetes no id serve para passar o exato valor dele, seja email ou nome
}
  // Form
  // No form controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit. O preventDefault() irá prevenir o comportamento padrão, que seria de atualizar a página, enviando uma requisição para o que estiver em action="".
  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
        <button>Enviar</button>
    </form>

    </>
  )
}

export default App
