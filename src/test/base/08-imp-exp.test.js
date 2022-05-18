import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("pruebas en el 08-functiones", () => {
  test("deve retornar un Heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("deve retornar un undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("deve retorna un el owner de un heroe", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);

    const heroeData = heroe.filter((h) => h.owner === owner);

    expect(heroe).toEqual(heroeData);
  });

  test("deve retorna un dos", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);

    const size = heroe.length;

    expect(size).toBe(2);
  });
});
