import { verifyPermission, User, LOCATION, NATIONALITY, Casino} from "../src/e3";

describe('verifyPermission', () => {
    test('deve retornar um brasileiro permitido', () => {

      const user: User = {
        name: 'Mordecai',
        age: 19,
        nationality: NATIONALITY.BRAZILIAN
      }
      
      const casino: Casino = {
        name: "Dinero Dinero",
        location: LOCATION.BRAZIL
      };

      const output = verifyPermission(casino, [user]);
  
      expect(output.brazilians.allowed).toEqual(["Mordecai"]);
    });
    test('deve retornar um americano permitido', () => {

      const user: User = {
        name: 'Mordecai',
        age: 19,
        nationality: NATIONALITY.AMERICAN
      }
      
      const casino: Casino = {
        name: "Dinero Dinero",
        location: LOCATION.BRAZIL
      };

      const output = verifyPermission(casino, [user]);
  
      expect(output.americans.allowed).toEqual(["Mordecai"]);
    });
    test('deve retornar 2 usuários não permitido em cada nacionalidade', () => {

      const user1: User = {
        name: 'Mordecai',
        age: 19,
        nationality: NATIONALITY.BRAZILIAN
      }
      const user2: User = {
        name: 'Rigby',
        age: 19,
        nationality: NATIONALITY.AMERICAN
      }
      const user3: User = {
        name: 'Muscle Man',
        age: 19,
        nationality: NATIONALITY.BRAZILIAN
      }
      const user4: User = {
        name: 'Hi-five Ghost',
        age: 19,
        nationality: NATIONALITY.AMERICAN
      }
      
      const casino: Casino = {
        name: "Dinero Dinero",
        location: LOCATION.EUA
      };

      const output = verifyPermission(casino, [user1,user2,user3,user4]);
  
      expect(output.brazilians.unallowed).toEqual(["Mordecai", "Muscle Man"]);
      expect(output.americans.unallowed).toEqual(["Rigby", "Hi-five Ghost"]);
    });
    test('deve retornar 2 usuários estadunidenses permitidos e 2 brasileiros não permitidos', () => {

      const user1: User = {
        name: 'Mordecai',
        age: 19,
        nationality: NATIONALITY.BRAZILIAN
      }
      const user2: User = {
        name: 'Rigby',
        age: 21,
        nationality: NATIONALITY.AMERICAN
      }
      const user3: User = {
        name: 'Muscle Man',
        age: 19,
        nationality: NATIONALITY.BRAZILIAN
      }
      const user4: User = {
        name: 'Hi-five Ghost',
        age: 21,
        nationality: NATIONALITY.AMERICAN
      }
      
      const casino: Casino = {
        name: "Dinero Dinero",
        location: LOCATION.EUA
      };

      const output = verifyPermission(casino, [user1,user2,user3,user4]);
  
      expect(output.brazilians.unallowed).toEqual(["Mordecai", "Muscle Man"]);
      expect(output.americans.allowed).toEqual(["Rigby", "Hi-five Ghost"]);
    });
    test('deve retornar um array de brasileiros permitidos com tamanho menor que dois e maior que zero', () => {

      const user1: User = {
        name: 'Mordecai',
        age: 19,
        nationality: NATIONALITY.BRAZILIAN
      }
      
      const casino: Casino = {
        name: "Dinero Dinero",
        location: LOCATION.BRAZIL
      };

      const output = verifyPermission(casino, [user1]);
  
      expect(output.brazilians.allowed.length).toBeGreaterThan(0);
      expect(output.brazilians.allowed.length).toBeLessThan(2);
    });
    test('deve retornar um array de estadunidenses não permitidos de tamanho igual a zero', () => {

      const user1: User = {
        name: 'Mordecai',
        age: 19,
        nationality: NATIONALITY.AMERICAN
      }
      
      const casino: Casino = {
        name: "Dinero Dinero",
        location: LOCATION.BRAZIL
      };

      const output = verifyPermission(casino, [user1]);
  
      expect(output.americans.unallowed.length).toEqual(0);
    });
    test('array de não permitidos deve conter algum dos nomes selecionados', () => {

        const user1: User = {
          name: 'Mordecai',
          age: 19,
          nationality: NATIONALITY.BRAZILIAN
        }
        const user2: User = {
          name: 'Rigby',
          age: 19,
          nationality: NATIONALITY.AMERICAN
        }
        const user3: User = {
          name: 'Muscle Man',
          age: 19,
          nationality: NATIONALITY.BRAZILIAN
        }
        const user4: User = {
          name: 'Hi-five Ghost',
          age: 19,
          nationality: NATIONALITY.AMERICAN
        }
        
        const casino: Casino = {
          name: "Dinero Dinero",
          location: LOCATION.EUA
        };
  
        const output = verifyPermission(casino, [user1,user2,user3,user4]);
    
        expect(output.brazilians.unallowed).toContain("Muscle Man");
        expect(output.americans.unallowed).toContain("Rigby");
      });
      test('deve retornar array de estadunidenses nãp permitidos menor que um e de brasileiros não permitidos maior que um', () => {

        const user1: User = {
          name: 'Mordecai',
          age: 19,
          nationality: NATIONALITY.BRAZILIAN
        }
        const user2: User = {
          name: 'Rigby',
          age: 21,
          nationality: NATIONALITY.AMERICAN
        }
        const user3: User = {
          name: 'Muscle Man',
          age: 19,
          nationality: NATIONALITY.BRAZILIAN
        }
        const user4: User = {
          name: 'Hi-five Ghost',
          age: 21,
          nationality: NATIONALITY.AMERICAN
        }
        
        const casino: Casino = {
          name: "Dinero Dinero",
          location: LOCATION.EUA
        };
  
        const output = verifyPermission(casino, [user1,user2,user3,user4]);
    
        expect(output.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(output.americans.unallowed.length).toBeLessThan(1);
      });
  })