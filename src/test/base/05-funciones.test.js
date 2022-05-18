import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("pruebas en el 05-funciones", () => {
  test("deve retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("deve retorna un objeto", () => {
    const name = "pepe";

    const userTest = {
      uid: "ABC567",
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(user).toEqual(userTest);
  });
});
