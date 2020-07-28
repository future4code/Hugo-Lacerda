import validateChar from "../src/e1validateChar";

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