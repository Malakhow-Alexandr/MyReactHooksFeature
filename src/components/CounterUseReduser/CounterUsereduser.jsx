import { useReducer } from 'react';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

export const CounterUseReduser = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <p>{state.count}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Decrement
      </button>
    </div>
  );
};
