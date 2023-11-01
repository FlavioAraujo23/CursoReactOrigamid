import React, { useState } from 'react'
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
const AppEx = () => {
  const urlTablet = "https://ranekapi.origamid.dev/json/api/produto/tablet"
  const urlSmartphone = "https://ranekapi.origamid.dev/json/api/produto/smartphone"
  const urlNotebook = "https://ranekapi.origamid.dev/json/api/produto/notebook"
  const [TabletDados, setTabletDados] = useState({});
  const [SmartphoneDados, setSmartphoneDados] = useState({});
  const [NotebookDados, setNotebookDados] = useState({});
  const [dadosisOn, setDadosisOn] = useState(false);
  const [ativaTexto, setAtivaTexto] = useState(false);
  const [btn, setBtn] = useState({});
  const div = {display: 'flex', flexDirection: 'column', width: '100%'}

  async function handleFetch(n){
    let dados;
    let res;
    if(n === 'Tablet'){
      dados = (await fetch(urlTablet))
      res = await dados.json()
    } else if(n === 'Smartphone') {
      dados = (await fetch(urlSmartphone))
      res = await dados.json()
    } else if (n === 'Notebook') {
      dados = (await fetch(urlNotebook))
      res = await dados.json()
    }
    setDadosisOn(true);
    return {...res}
  }

  async function handleInit(e) {
    setAtivaTexto(true);
    const nameOfbuttonClicked = e.target.innerText;
    const result = await handleFetch(nameOfbuttonClicked)
    e.preventDefault();
    setDadosisOn(false);

     if (nameOfbuttonClicked === 'Tablet'){
      setDadosisOn(true)
      return setTabletDados(result, setBtn(result))

    } else if (nameOfbuttonClicked === 'Smartphone') {
      setDadosisOn(true)
      return setSmartphoneDados(result, setBtn(result));

    } else if (nameOfbuttonClicked === 'Notebook') {
      setDadosisOn(true)
      return setNotebookDados(result, setBtn(result));
    }
  }

  return (
    <>
    <button onClick={(e) => handleInit(e)}>Tablet</button>
    <button onClick={(e) => handleInit(e)}>Smartphone</button>
    <button onClick={(e) => handleInit(e)}>Notebook</button>
    {!dadosisOn ? <p>{ativaTexto ? 'carregando' : ''}</p> : <div style={div}>
      <h1>{btn.id}</h1>
      {console.log(btn)}
      <span>{btn.preco}</span>
      <img style={{height:'500px', width:'500px'}} src={btn.fotos[0].src} alt={btn.fotos[0].titulo} />
      <p>{btn.descricao}</p>
      </div>}
    </>
  )
}

export default AppEx