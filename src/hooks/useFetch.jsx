import { useState, useEffect, useCallback } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null); // State to store fetched data
  const [error, setError] = useState(null); // State to store errors
  const [loading, setLoading] = useState(false); // State to indicate loading status

  // Fetch data function
  const fetchData = useCallback(
    async (fetchOptions) => {
      setLoading(true); // Start loading
      setError(null); // Reset error
      try {
        const response = await fetch(url, {
          ...options,
          ...fetchOptions, // Merge additional options like method, headers, or body
        });
        console.log({ options, fetchOptions });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setData(result); // Set data
      } catch (err) {
        setError(err.message); // Capture and set errors
      } finally {
        setLoading(false); // Stop loading
      }
    },
    [url, options]
  );

  // Automatically fetch data for GET requests
  useEffect(() => {
    if (options.method === "GET" || !options.method) {
      fetchData();
    }
  }, []);

  return { data, error, loading, fetchData }; // Return states and the fetchData function
};

export default useFetch;
