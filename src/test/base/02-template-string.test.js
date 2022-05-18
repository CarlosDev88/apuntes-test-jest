// import "testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("pruebas eb ek 02-template-string.js", () => {
  test("getSaludo debe retornar Hola nombre", () => {
    const nombre = "carlos";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe(`Hola ${nombre}`);
  });

  test("get saludo deve retornar hola Fernando si no hay argumento en el nombre", () => {
    const saludo = getSaludo();
    expect(saludo).toBe(`Hola Fernado`);
  });
});
