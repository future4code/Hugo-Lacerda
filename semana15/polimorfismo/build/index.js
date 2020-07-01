"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Industry_1 = __importDefault(require("./Industry"));
const Commerce_1 = __importDefault(require("./Commerce"));
const Residence_1 = __importDefault(require("./Residence"));
// const client1: Client = {
//   name: 'Hugo',
//   registrationNumber: 1,
//   consumedEnergy: 100,
//   calculateBill: () => {
//     return 4
//   }
// }
// console.log(client1.name)
// console.log(client1.registrationNumber)
// console.log(client1.consumedEnergy)
// console.log(client1.calculateBill())
// E1 - a. Todas as propriedades imprimiram no console na sintaxe acima, pois, quando não declarada explicitamente, assumem o encapsulamento public.
// const place1 = new Place()
//  E2 - a. Cannot create an instance of an abstract class.ts(2511).
// b. Precisariamos retirar o abstract de sua criação ou fazermos uma classe que herda da classe abstrata Place. 
const industry1 = new Industry_1.default(300, 'AAA');
const commerce1 = new Commerce_1.default(30, 'BBB');
const residence1 = new Residence_1.default(3, 'CCC');
console.log(industry1.getCep());
console.log(commerce1.getCep());
console.log(residence1.getCep());
