import { getImagen } from "../../base/11-async-await";
import heroes from "../../data/heroes";

describe("pruebas con async-await y fetch", () => {
  test("deve retornar (el url de la imagen", async () => {
    const url = await getImagen();

    expect(url.includes("https://")).toBe(true);
  });

  test("deve obtener un error si heroe no existe", (done) => {});
});
