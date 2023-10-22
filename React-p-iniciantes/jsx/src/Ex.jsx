import { useState } from "react";

function Ex() {
// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};
const dados = mario;
const ativa = dados.ativa;
const ativo = { color: 'green' };
const inativo = { color: 'red' };
const [valorGasto, setvalorGasto] = useState(0);
const total = dados.compras.map((item) => +item.preco.replace('R$ ', '')).reduce((a, b) => a + b);


  return (
    <>
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={ativa ? ativo : inativo}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
      <p>Total gasto: R$ {total}</p>
      
      {/* Passando a tag p dentro do JSX como uma expressão, ou seja, se a primeira verificação der verdadeira a segunda irá reproduzir o elemento na tela */}
     {total > 10000 && <p>O valor gasto foi superior a R$10.000</p>}
    </div>
    
    </>
  )
}

export default Ex