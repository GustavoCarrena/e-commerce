import React from 'react';
import './cartWidget.css'

export const CartWidget = () => {
    return (
        <div className="card-wigget-container">
            <img className='card-widget' src="/assets/img/carrito-de-compras.svg" alt="carrito" />
            <div className='card-widget-counter-container'>
                <span className='card-widget-counter'>10</span>
            </div>
        </div>
    )
};
