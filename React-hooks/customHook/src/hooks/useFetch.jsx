import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loadind, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null)
      setLoading(true);
      response = await fetch(url, options);
      json = response.json();   
      setLoading(false);
    } catch (erro) {
        json = null;
        setError(erro);
    } finally {
        setLoading(false)
        setData(json);
        return {response, json}
    }
  }, []);

  return {data, error, loadind, request}
};

export default useFetch