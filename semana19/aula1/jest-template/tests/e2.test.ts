import { performPurchase, User } from "../src/e1";

describe('performPurchase', () => {
    test('deve retornar um novo user com saldo menor', () => {

      const user: User = {
        name: 'Mordecai',
        balance: 400
      }
      
      const value: number = 200;

      const output = performPurchase(user, value);
  
      expect(output!.balance).toEqual(200);
      expect(output!.name).toEqual('Mordecai');
    })
    // test('deve retornar um user com saldo 0', () => {

    //   const user: User = {
    //     name: 'Mordecai',
    //     balance: 400
    //   }
      
    //   const value: number = 400;

    //   const output = performPurchase(user, value);
  
    //   expect(output.balance).toEqual(0);
    //   expect(output.name).toEqual('Mordecai');
    // })
    // test('deve retornar undefined', () => {

    //   const user: User = {
    //     name: 'Mordecai',
    //     balance: 400
    //   }
      
    //   const value: number = 401;

    //   const output = performPurchase(user, value);
  
    //   expect(output).toBeUndefined();
    // })
  })