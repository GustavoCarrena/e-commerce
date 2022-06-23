import styles from '../itemcount/itemCount.module.scss';
import { useCounter } from '../../hooks/useCounter';


export const ItemCount = ({ initialValue, stock, onAdd }) => {

    const { counter, increment, decrement } = useCounter(initialValue, stock);

    //sacar cards (a Item) y dejar solo los botones y counter
    return (
        // <div className={`card ${styles.cardsContainer}`} >

        //     <div className={`card-body ${styles.cardBody}`}>
        //         <h5 className={`card-title ${styles.cardTitle}`}>Sillon 1</h5>
        //         <img src="/assets/img/products/escandinavo-curvo.jpg" className={styles.cardImg} alt="sillon" />
                <div className={styles.cardContainer}>
                    <button type="button" className={`btn btn-danger ${styles.buttons}`} onClick={decrement}> - </button>
                    <div className={styles.counter}>{counter}</div>
                    <button type="button" className={`btn btn-success ${styles.buttons}`} onClick={increment}> + </button>
                {/* </div> */}
                <button id='button' type="button" className={`btn btn-secondary ${styles.addButton}`} onClick={onAdd}> Ver detalle del producto</button>



            {/* </div> */}
        </div>



    )
};


