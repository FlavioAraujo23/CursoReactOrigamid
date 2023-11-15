import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import useFetch from "./hooks/useFetch";
function App() {
  
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/notebook');
  }, [request]);

  
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) return <div>{data.nome}</div>;
  else return null;

  // return (
  //   <>
  //    <div>
  //     <p>Preferido: {produto}</p>
  //     <button onClick={handleClick}>notebook</button>
  //     <button onClick={handleClick}>smartphone</button>
  //   </div>
  //   </>
  // )
}

export default App
