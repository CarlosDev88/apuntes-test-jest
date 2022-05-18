import React from "react";
import "@testing-library/jest-dom";
import { PrimeraApp } from "../components/PrimeraApp";
import { shallow } from "enzyme";

describe("pruebas componente <PrimeraApp/>", () => {
  //   test("deve mostrar 'Hola soy pepe'", () => {
  //     const saludo = "Hola soy pepe";
  //     const warapper = render(<PrimeraApp saludo={saludo} />);

  //     expect(warapper.getByText(saludo)).toBeInTheDocument();
  //   });

  test("deve mostrar <PrimeraApp/> correctamente", () => {
    const saludo = "Hola soy pepe";
    const warapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(warapper).toMatchSnapshot();
  });

  test("deve mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola soy pepe";
    const subtitulo = "Amigo que pasa";
    const warapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = warapper.find("p").text();
    expect(textoParrafo).toEqual(subtitulo);
  });
});
