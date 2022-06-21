import styles from '../itemcount/itemCount.module.scss'
// import '../../App.css';
import { useCounter } from '../../hooks/useCounter';
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

export const ItemCount = ({ initialValue, stock, onAdd }) => {

    const { counter, increment, decrement } = useCounter(initialValue, stock);
    const [countVisible, setCountVisible] = useState(false)

    return (
        <div className={`card ${styles.cardsContainer}`} >

            <div className={`card-body ${styles.cardBody}`}>
                <h5 className={`card-title ${styles.cardTitle}`}>Sillon 1</h5>
                <img src="/assets/img/products/escandinavo-curvo.jpg" className={styles.cardImg} alt="sillon" />
                <div className={styles.cardContainer}>
                    <button type="button" className={`btn btn-danger ${styles.buttons}`} onClick={decrement}> - </button>
                    <div className={styles.counter}>{counter}</div>
                    <button type="button" className={`btn btn-success ${styles.buttons}`} onClick={increment}> + </button>
                </div>
                <button id='button' type="submit" className={`btn btn-secondary ${styles.addButton}`} onClick={() => setCountVisible(onAdd)}> Agregar al Carrito</button>
                <div className={styles.count}>
                    {
                        countVisible === true ? `Cantidad agregada al Carrito:  ${counter}` : ''
                    }
                </div>


            </div>
        </div>



    )
};


