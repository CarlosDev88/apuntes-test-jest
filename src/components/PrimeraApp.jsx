import React from "react";

import PropTypes from "prop-types";

export const PrimeraApp = ({ saludo, subtitulo }) => {
  //   const { saludo } = props;
  let arr = [1, 2, 3, 4, 5, 6];
  let objeto = {
    nobre: "pepe",
    edad: 25,
  };
  return (
    <>
      <div>
        <h1>Esto es el primer functional component</h1>
        <h2>{arr.map((num) => `${num},`)}</h2>
        {arr.map((num) => ` ${num * 2},`)}
        <pre>{JSON.stringify(objeto)}</pre>
      </div>

      <div>
        <h2> Otra parte del componente </h2>
        {saludo}
        <p>{subtitulo}</p>
      </div>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string,
};

PrimeraApp.defaultProps = {
  subtitulo: "soy un subtitulo",
};
