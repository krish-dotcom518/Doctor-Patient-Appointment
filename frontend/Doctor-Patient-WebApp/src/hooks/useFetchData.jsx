import { useEffect, useState } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const token = localStorage.getItem('token'); // 🔥 dynamic retrieval
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || 'Failed to fetch data');
        }

        setData(result.data || result); // fallback in case no `.data`
      } catch (err) {
        setError(err.message);
      } finally {
        setTimeout(() => setLoading(false), 1000); // smoother UX
      }
    };

    if (url) fetchData();
  }, [url]);

  return { data, loading, error };

};

export default useFetchData;
