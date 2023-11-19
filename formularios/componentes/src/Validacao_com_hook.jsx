import React from 'react'
import Input from './components/form/Input';

const Validacao = () => {
  const cep = useForm('cep');

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <button>Enviar</button>
    </form>
  );
}

export default Validacao