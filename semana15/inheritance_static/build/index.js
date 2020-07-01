"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seller_1 = __importDefault(require("./Seller"));
// const user1 = new User('U1', 'usuario@um.com', 'Usuário Um', 'abacaxi');
// console.log(user1);
// E1 - a. Somente imprimindo a instância toda, como acima, mas não imprimindo separadamente, com user1.password, pois trata-se de uma variável private, acessível somente de dentro da classe. 
// b. Uma única vez. 
// const customer1 = new Customer('C1', 'customer@um.com', 'Customer Um', 'abacaxi', '9712843987981');
// console.log(customer1)
// E2 - a. Uma.
// b. Uma, pois é a classe pai da classe Customer e é chamada pelo super no construtor filho.
// console.log(customer1.getId())
// console.log(customer1.getName())
// console.log(customer1.getEmail())
// console.log(customer1.getCreditCard())
// console.log(customer1.purchaseTotal)
// E3 - a. Não, pois permanece um atributo private, como ditado pela classe pai.
// console.log(customer1.interoduceYourself());
// E4 - Feito.
// console.log(customer1.interoduceYourself());
// E5 - Feito.
// const employee1 = new Employee('E1', 'e@um.com', 'Employee Um', 'abacaxi', new Date(Date.now()), 8000);
// E6 - a. Uma única vez.
// b. Email, salário base, data de admissão, id e nome.
// console.log(employee1.calculateTotalSalary())
// E7 - Feito.
const seller1 = new Seller_1.default('S1', 's@um.com', 'Seller Um', 'abacaxi', new Date(Date.now()), 3000);
// console.log(seller1)
// E8 - a. Os mesmos parâmetros do construtor da classe pai.
// b.  É possível imprimir aquilo que está sendo passado pelos métodos getters, mas não referenciando através do, seler1.qualquerDadoDaClasse, pois permanecem inacessíveis publicamente. 
seller1.setSalesQuantity(40);
console.log(seller1.getSalesQuantity());
// E9 - a. Não sem o uso do método get criado para retornar esse valor, por ser um atributo private.
console.log(seller1.calculateTotalSalary());
// E10 - a. O valor do salário base somados aos 400 de benefício e ao número de vendas vezes o valor da comissão, pois seguiu o método sobrescrito na classe Seller.
