import React from 'react';
import styles from "../itemcount/itemCount.module.scss";
import { useCounter } from "../../hooks/useCounter";

export const ItemCount = ({ initialValue, stock, onConfirm }) => {
  
  const { counter, increment, decrement } = useCounter(initialValue, stock);

  return (
    <div className={styles.container}>
      <p className={styles.stock}>Unidades Disponibles: {stock}</p>
      <div className={styles.counterContainer}>
        <button
          type="button"
          className={`btn btn-danger ${styles.buttons}`}
          onClick={decrement}
        >
          -
        </button>
        <div className={styles.counter}>{counter}</div>
        <button
          type="button"
          className={`btn btn-success ${styles.buttons}`}
          onClick={increment}
        >
          +
        </button>
      </div>
      <button
        id="button"
        type="button"
        className={`btn btn-secondary ${styles.addButton}`}
        onClick={() => onConfirm(counter)}
      >
        {" "}
        Agregar al Carrito
      </button>
    </div>
  );
};
