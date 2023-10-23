function Ex2() {
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

  return (
    <>
    <section>
      {produtos.filter((p) => +p.preco.replace('R$ ', '') > 1500).map((i) => 
      <div key={i.id}>
        <h2>{i.nome}</h2>
        <span>Preco: {i.preco}</span>
        <ul>
          {i.cores.map(c => <li key={c} style={{ backgroundColor: c, color: 'white'}}>{c}</li>)}
        </ul>
      </div> 
      )}
    </section>
  
    </>
  )
}

export default Ex2