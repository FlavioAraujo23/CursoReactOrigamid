import React from 'react';
import Input from './components/form/Input';
import Select from './components/form/Select';
import Radio from './components/form/Radio';

function App() {
  // o estado do input é passado do lado de fora e não dentro
  const [nome, setNome] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [termos, setTermos] = React.useState([]);

  return (
    <>
    <div>
      <form>
        <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
        <Select options={['smartphone', 'tablet']} value={produto} setValue={setProduto} />
        <Input id="nome" label="nome" value={nome} setValue={setNome} />
        <Checkbox options={['Termos e Condições']} value={termos} setValue={setTermos} /> 
        {/*componente utilizando as props como atributos do input */}
      </form>
    </div>

    </>
  )
}

export default App
