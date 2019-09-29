import { useState, useEffect } from 'react';

const UseFetch = (url,deps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, [deps]);

  return [data, loading];
};

export default UseFetch;
