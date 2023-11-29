import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';
import Head from './Head';
const Home = () => {
  
   const [dados, setDados] = React.useState(null);

   React.useEffect(() => {
     fetch("https://ranekapi.origamid.dev/json/api/produto")
     .then((request) => request.json())
     .then((json) => setDados(json));
   },[]);
    
   if(dados === null) return null;

  return (
    <>
      <section className={styles.produtos + ' animeLeft'}>
        <Head title={`Ranek`}/>
        {dados.map((dado) => (
          <Link to={`produto/${dado.id}`} key={dado.id}>
            <img src={dado.fotos[0].src} alt={dado.fotos[0].titulo} />
            <h1 className={styles.nome}>{dado.nome}</h1>

          </Link>
        ))}
      </section>
    </>
    
  )
}

export default Home