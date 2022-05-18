import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { CounterApp } from "../components/CounterApp";

describe("pruebas componente <CounterApp/>", () => {
  let warapper = shallow(<CounterApp />);

  //inicilizar el componente para resetear los valores iniciales
  beforeEach(() => {
    warapper = shallow(<CounterApp />);
  });

  test("deve mostrar <PrimeraApp/> correctamente", () => {
    expect(warapper).toMatchSnapshot();
  });

  test("deve mostrar el valor por defecto de 100", () => {
    const value = 100;
    const factor = 4;
    const warapper = shallow(<CounterApp value={value} factor={factor} />);

    const textoCounter = warapper.find("h2").text().trim();
    expect(textoCounter).toBe(`${value}`);
  });

  test("deve incrementar con el boton +1", () => {
    warapper.find("button").at(0).simulate("click");

    const counterText = warapper.find("h2").text().trim();

    expect(counterText).toBe("11");
  });

  test("deve decrementar con el boton -1", () => {
    warapper.find("button").at(2).simulate("click");

    const counterText = warapper.find("h2").text().trim();

    expect(counterText).toBe("9");
  });

  test("deve recetear el contador", () => {
    const value = 100;
    const warapper = shallow(<CounterApp value={value} />);

    warapper.find("button").at(0).simulate("click");
    warapper.find("button").at(1).simulate("click");
    const counterText = warapper.find("h2").text().trim();

    expect(counterText).toBe("100");
  });
});
