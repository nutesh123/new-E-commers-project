
import { useSelector, useDispatch } from 'react-redux';

import styles from './Counter.module.css';

export function Counter() {

  const count = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const incrementHandler = ()=>{
    dispatch({ type : 'increment'})
  }
  const decrementHandler = ()=>{
    dispatch({ type : 'decrement'})
  }

  const increment5Handler = ()=>{
    dispatch({ type : 'incrementby 5'})
  }
  const decrement5Handler = ()=>{
    dispatch({ type : 'decrementby 5'})
  }


  return (
    <div>
      <div className={styles.row}>
      <button  className={styles.button}
          aria-label="Decrement value"
          onClick={decrement5Handler} 
          >Decrement by 5</button>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={decrementHandler}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={incrementHandler}
        >
          +
        </button>
        <button  className={styles.button}
          aria-label="Decrement value"
          onClick={increment5Handler}
          >Increment by 5</button>
      </div>
      <div className={styles.row}>
      </div>
    </div>
  );
}
