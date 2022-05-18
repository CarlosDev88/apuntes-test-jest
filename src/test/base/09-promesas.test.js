import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("pruebas en el 09-promesas", () => {
  test("deve retornar un Heroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("deve obtener un error si heroe no existe", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
