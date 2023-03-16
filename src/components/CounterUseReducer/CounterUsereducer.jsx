import { useReducer } from 'react';
import styles from './_CounterUseReducer.module.scss';

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

export const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className={styles.ReducerContainer}>
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
