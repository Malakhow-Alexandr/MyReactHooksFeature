import axios from 'axios';
import { useRef } from 'react';

export const AbortButton = () => {
  const abortController = useRef();
  const fetchData = async () => {
    if (abortController.current) {
      abortController.current.abort();
    }
    abortController.current = new AbortController();
    try {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      await axios.get(url, { signal: abortController.current.signal });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button style={{ marginBottom: '60px' }} onClick={fetchData}>
        makeFetch
      </button>
    </div>
  );
};
