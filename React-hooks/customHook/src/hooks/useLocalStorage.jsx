import React from "react";

// useLocalStorage
  // Podemos criar nossos próprios hooks, assim evitamos a repetição de código. Todo custom hook deve começar com a palavra use. Exemplo: useNomeDoHook. Podemos retornar o que quisermos do hook, seja um valor único, uma array ou um objeto.
  const useLocalStorage = (key, inicial) => {
    const [state, setState] = React.useState(() => {
      const local = window.localStorage.getItem(key);
      return local ? local : inicial;
    });
  
    React.useEffect(() => {
      window.localStorage.setItem(key, state);
    }, [key, state]);
  
    return [state, setState];
  };

export default useLocalStorage