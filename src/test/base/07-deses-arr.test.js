import { retornaArreglo } from "../../base/07-deses-arr";

describe("pruebas en el 07-desestructuracion", () => {
  test("deve retornar un string y un numero", () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });

  test("deve retorna un objeto", () => {});
});
