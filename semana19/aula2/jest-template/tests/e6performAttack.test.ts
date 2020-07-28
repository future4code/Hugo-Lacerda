import performAttack from "../src/e3performAttack";

describe("performAttack, parte 2", () => {
  test("Personagens válidos, defensor deve ter vida reduzida a 0.", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    let attacker = {
      name: "Mordecai",
      hp: 800,
      defense: 900,
      strength: 6000,
    };

    let defender = {
      name: "Rigby",
      hp: 400,
      defense: 400,
      strength: 100,
    };

    performAttack(attacker, defender, validatorMock);

    expect(defender.hp).toEqual(0);
  });
  test("Personagens válidos e idênticos, valores devem passar sem alteração.", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    let attacker = {
      name: "Mordecai",
      hp: 800,
      defense: 900,
      strength: 600,
    };
    let defender = {
      name: "Mordecai",
      hp: 800,
      defense: 900,
      strength: 600,
    };

    performAttack(attacker, defender, validatorMock);

    expect(defender.hp).toEqual(800);
  });
  test("Personagens válidos, defensor com defesa maior que a força do atacante, hp deve passar sem alteração.", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    let attacker = {
      name: "Mordecai",
      hp: 800,
      defense: 900,
      strength: 600,
    };
    let defender = {
      name: "Skips",
      hp: 1800,
      defense: 1800,
      strength: 3300,
    };

    performAttack(attacker, defender, validatorMock);

    expect(defender.hp).toEqual(1800);
  });
  test("Personagens válidos, a vida do defensor deve passar para 400 e a do atacante para 200.", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    let attacker = {
      name: "Mordecai",
      hp: 800,
      defense: 600,
      strength: 600,
    };
    let defender = {
      name: "Muscle Man",
      hp: 1000,
      defense: 500,
      strength: 1000,
    };

    performAttack(attacker, defender, validatorMock);
    performAttack(defender, attacker, validatorMock);

    expect(defender.hp).toEqual(900);
    expect(attacker.hp).toEqual(400);
  });
});