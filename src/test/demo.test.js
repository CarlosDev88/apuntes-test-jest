describe("Pruevas en el archivo demo.test.js", () => {
  test("should be equal bod strings", () => {
    // 1 inicializacion
    const mensaje1 = "Hola Mundo";

    // 2 estimulo
    const mensaje2 = `Hola Mundo`;

    //   3 Observar el comportamiento
    expect(mensaje1).toBe(mensaje2);
  });
});
