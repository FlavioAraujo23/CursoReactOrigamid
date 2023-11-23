import React from 'react'
import Head from './Head'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
//     Helmet
// Uma extensão famosa é o react-helmet. Ela retonar com componente em que você pode definir tags do Head dentro do mesmo.
    <div>
       <Helmet>
        <title>Página Home</title>
        <meta name="description" content="Conteúdo da descrição" />
      </Helmet>
      <Head title="Página Home" description="Descrição da home" />
      <p>Essa é a Home</p>
    </div>
  )
}

export default Home