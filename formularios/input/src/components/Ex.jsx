import React from 'react'

const Ex = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  })

  const [response, setResponse] = React.useState(null)
  // Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

function handleChange({ target }) {
  const {id, value } = target;
  setForm({...form, [id]: value})
}

function handleSubmit(event) {
  event.preventDefault();
  fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // form é o objeto com os dados do formulário
  body: JSON.stringify(form),
  }).then(response => setResponse(response));
}

// Mostre uma mensagem na tela, caso a resposta da API seja positiva
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" value={form.nome} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={form.email} onChange={handleChange} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="senha" value={form.senha} onChange={handleChange} />

        <label htmlFor="text">Cep</label>
        <input type="text" id="cep" value={form.cep} onChange={handleChange} />

        <label htmlFor="text">Rua</label>
        <input type="text" id="rua" value={form.rua} onChange={handleChange} />

        <label htmlFor="text">Numero</label>
        <input type="text" id="numero" value={form.numero} onChange={handleChange} />

        <label htmlFor="text">Bairro</label>
        <input type="text" id="bairro" value={form.bairro} onChange={handleChange} />

        <label htmlFor="text">Cidade</label>
        <input type="text" id="cidade" value={form.cidade} onChange={handleChange} />

        <label htmlFor="text">Estado</label>
        <input type="text" id="estado" value={form.estado} onChange={handleChange} />
        <button>Enviar</button>

        {response && response.ok && <p style={{color: 'green'}}>Formulario enviado</p>}

      </form>
    </div>
  )
}

export default Ex