import axios from 'axios';
import { useEffect, useState } from 'react';

export const AbortHttpsBoard = () => {
  const [isVisible, setIsvisible] = useState(false);
  return (
    <div>
      <button
        style={{ marginBottom: '60px', marginTop: '60px' }}
        onClick={() => setIsvisible(prevState => !prevState)}
      >
        {isVisible ? 'Unmount' : 'Mount'}
      </button>
      {isVisible && <ChildComponent />}
    </div>
  );
};

const ChildComponent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData() {
      try {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const response = await axios.get(url, {
          signal: abortController.signal,
        });
        setTodos(prevTodos => [...prevTodos, ...response.data]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div style={{ marginBottom: '60px' }}>
      <h2>ChildComponent</h2>
      {todos.length > 0 && (
        <div>
          {todos.map(todo => (
            <div key={todo.id}>{todo.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};
