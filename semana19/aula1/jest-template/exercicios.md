### E1
```
interface User {
    name: string,
    balance: number
}

function performPurchase(user: User, value: number): User | undefined {
    if(user.balance > value){
        return {
            name: user.name,
            balance: (user.balance - value) 
        };
    }

    return undefined;
}
```

### E2
```
import { performPurchase, User } from "../src/e1";

describe('performPurchase', () => {
    test('deve retornar um novo user com saldo menor', () => {

      const user: User = {
        name: 'Mordecai',
        balance: 400
      }
      
      const value: number = 200;

      const output = performPurchase(user, value);
  
      expect(output.balance).toEqual(200);
      expect(output.name).toEqual('Mordecai');
    })
    test('deve retornar um user com saldo 0', () => {

      const user: User = {
        name: 'Mordecai',
        balance: 400
      }
      
      const value: number = 400;

      const output = performPurchase(user, value);
  
      expect(output.balance).toEqual(0);
      expect(output.name).toEqual('Mordecai');
    })
    test('deve retornar undefined', () => {

      const user: User = {
        name: 'Mordecai',
        balance: 400
      }
      
      const value: number = 401;

      const output = performPurchase(user, value);
  
      expect(output).toBeUndefined();
    })
  })
```
### E3
```
enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
  }
  
  enum NATIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }
  
  interface User {
    name: string;
    age: number;
    nationality: NATIONALITY;
  }
  
  interface Casino {
    name: string;
    location: LOCATION;
  }

  interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
  interface ResultItem {
    allowed: string[];
    unallowed: string[];
  }

  function verifyPermission(casino: Casino, users: User[]): Result{

    let allowedUsers: User[] = [];
    let unallowedUsers: User[] = [];

    for (const user of users) {
        if (casino.location === LOCATION.EUA) {
          if (user.age >= 21) {
            allowedUsers.push(user);
          } else {
            unallowedUsers.push(user);
          }
        } else if (casino.location === LOCATION.BRAZIL) {
          if (user.age >= 18) {
            allowedUsers.push(user);
          } else {
            unallowedUsers.push(user);
          }
          break;
        }
      }
    
      return {
        brazilians: {
          allowed: allowedUsers
            .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
            .map((u) => u.name),
          unallowed: unallowedUsers
            .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
            .map((u) => u.name),
        },
        americans: {
          allowed: allowedUsers
            .filter((user) => user.nationality === NATIONALITY.AMERICAN)
            .map((u) => u.name),
          unallowed: unallowedUsers
            .filter((user) => user.nationality === NATIONALITY.AMERICAN)
            .map((u) => u.name),
        },
      };
  }
```
c. Estava indo por um caminho a princípio já formando um array de nacionalidade no laço for, mas depois vi a lógica das Dicas e refatorei. 

### E4
```
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
  })
```
### E5
```
...
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
```
### E6
### E7