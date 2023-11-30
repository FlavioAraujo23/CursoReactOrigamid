import Button from './Button';

// PropTypes
// O PropTypes irá retornar um erro caso o valor da propriedade passada seja um tipo de dado diferente do especificado. É também possível especificar se uma propriedade é obrigatória ou não


const App = () => {
  return (
    <div>
      <h1>Meu App</h1>
      <Button margin="10px" width={300}>
        Clique Aqui
      </Button>
    </div>
  );
};
export default App
