import { useState } from "react";
import PropTypes from 'prop-types';

/**
 * @description  CustomHook for product quantity used in ItemCount. Format "number" for params required.
 * @param {Number} initialState Initial value of state starts at 1 (minimun quantity without considering stock)
 * @param {Number} stock Available product quantity
 * @returns {Object}    {counter, increment, decrement} 
 */
export const useCounter = (initialState, stock) => {
    const [counter, setCounter] = useState(initialState);
    const increment = (e) => counter < stock ? setCounter(counter + 1) : e.preventDefault();
    const decrement = (e) => counter <= initialState ? e.preventDefault() : setCounter(counter - 1);
    return { counter, increment, decrement }
};

useCounter.propType = {
    value: PropTypes.number.isRequired
};
