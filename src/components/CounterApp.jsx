import React, { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value = 10, factor = 1 }) => {
  const [counter, setcounter] = useState(value);

  const handleAdd = () => {
    setcounter(counter + factor);
  };

  const handleRemove = () => {
    setcounter(counter - factor);
  };

  const reset = () => {
    setcounter(value);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+{factor}</button>
      <button onClick={reset}>Reset</button>
      <button onClick={handleRemove}>-{factor}</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
  factor: PropTypes.number,
};

CounterApp.defaultProps = {
  factor: 1,
};
