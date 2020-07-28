### 1
```
export interface Character {
    name: string,
    hp: number,
    defense: number,
    strength: number
}

function validateChar(char: Character): boolean {
    if(!char.name || char.hp === undefined || char.defense === undefined || char.strength === undefined){
        return false;
    } else if(char.defense < 0 || char.strength < 0 || char.hp < 0){
        return false;
    }

    return true;
}
```
### 2
```
import validateChar, { Character } from "../src/e1validateChar";

describe('validateChar', () => {
    test('Personagem com nome vazio deve retornar false', () =>{
        const output = validateChar({
            name: "",
            hp: 3000,
            defense: 4000,
            strength: 5000
        });

        expect(output).toEqual(false);
    });
    test('Personagem com vida vazia deve retornar true', () =>{
        const output = validateChar({
            name: "Skips",
            hp: 0,
            defense: 4000,
            strength: 5000
        });

        expect(output).toEqual(true);
    });
    test('Personagem com força vazia deve retornar true', () =>{
        const output = validateChar({
            name: "Skips",
            hp: 3000,
            defense: 4000,
            strength: 0
        });

        expect(output).toEqual(true);
    });
    test('Personagem com defesa vazia deve retornar true', () =>{
        const output = validateChar({
            name: "Skips",
            hp: 3000,
            defense: 0,
            strength: 5000
        });

        expect(output).toEqual(true);
    });
    test('Personagem com valores numéricos negativos deve retornar false', () =>{
        const output = validateChar({
            name: "Skips",
            hp: -3000,
            defense: -10,
            strength: 5000
        });

        expect(output).toEqual(false);
    });
    test('Personagem com valores numéricos zerados deve retornar true', () =>{
        const output = validateChar({
            name: "Skips",
            hp: 0,
            defense: 10,
            strength: 5000
        });

        expect(output).toEqual(true);
    });
    test('Personagem com valores válidos deve retornar true', () =>{
        const output = validateChar({
            name: "Skips",
            hp: 1000,
            defense: 10000,
            strength: 5000
        });

        expect(output).toEqual(true);
    });
})
```
### 3
```
import validateChar from "./e1validateChar";
import Character from "./Character.interface";

export function performAttack(attacker: Character, defender: Character) {
  if (!validateChar(attacker) || !validateChar(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.hp -= attacker.strength - defender.defense;
  }
}

export function performAttackAlt(attacker: Character, defender: Character, validator: (char: Character) => boolean) {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.hp -= attacker.strength - defender.defense;
  }
}
```
c. A diferença entre as duas é que com a primeira versão não era possível realizar o teste unitário, uma vez que ela utilizava uma função "de fora" em suas linhas. Já na versão alternativa a função recebe uma função validator em seus parâmetros com a tipagem de uma função que recebe um objeto do tipo Character e retorna um valor booleano.

### 4
a. Devemos criar um Mock da função validateCharacter, pois queremos realizar testes unitários da função performAttack, podendo simular a resposta que a validateChar daria através do Mock.
```
test("Mock retorna true", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});

test("Mock retorna false", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});
```
### 5
```
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
```
### 6
```
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
```