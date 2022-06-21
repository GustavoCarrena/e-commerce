import { useState } from "react";
import PropTypes from 'prop-types';

export const useCounter = (initialState, stock) => {
    const [counter, setCounter] = useState(initialState);
    const increment = (e) => counter < stock ? setCounter(counter + 1) : e.preventDefault();
    const decrement = (e) => counter <= initialState ? e.preventDefault() : setCounter(counter - 1);
    return {counter, increment, decrement}
};

useCounter.propType = {
    value: PropTypes.number.isRequired
};
