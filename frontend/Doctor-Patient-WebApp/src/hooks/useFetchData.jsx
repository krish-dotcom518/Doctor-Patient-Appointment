import { useEffect, useState } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
        headers: {Authorization: `Bearer ${token}`},
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message + '🙂‍↔️');
        }

        setData(result.data);
        setTimeout(() => setLoading(false), 1500);
      } catch (err) {
        setTimeout(() => {
        setLoading(false);
        setError(err.message);
    }, 1500);
      } 
    };

    if (url) fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
