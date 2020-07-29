import performAttack from "../src/e3performAttack";

describe("performAttack", () => {
  test("Personagens válidos, defensor deve ter menos 200 pontos de vida.", () => {
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
      name: "Rigby",
      hp: 400,
      defense: 400,
      strength: 100,
    };

    performAttack(attacker, defender, validatorMock);

    expect(defender.hp).toEqual(200);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
    expect(validatorMock).toHaveReturnedWith(true);
  });
  test("Personagens inválidos, deve ser retornado um erro.", () => {
    const validatorMock = jest.fn(() => {
      return false;
    });

    let attacker = {
      name: "Mordecai",
      hp: -800,
      defense: 900,
      strength: 600,
    };

    let defender = {
      name: "Rigby",
      hp: 400,
      defense: 400,
      strength: 100,
    };

    try{
    performAttack(attacker, defender, validatorMock);
    }catch(err){
    expect(err.message).toEqual('Invalid character')
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
    expect(validatorMock).toHaveReturnedWith(false);
    }
  });
});
