import Client from './Client';
import Place from './Place';
import Industry from './Industry';
import Commerce from './Commerce';
import Residence from './Residence';

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

const industry1 = new Industry(300, 'AAA');
const commerce1 = new Commerce(30, 'BBB');
const residence1 = new Residence(3, 'CCC');

console.log(industry1.getCep());
console.log(commerce1.getCep());
console.log(residence1.getCep());

// E3 - Feito.

// E4 - a. Todos os métodos e propriedades da interface que implementa e da classe da qual herda, com a inclusão da propriedade cpf, por se tratar de pessoa física, e um método getter para o cpf.

// E5 - a. A semelhança é que ambas implementam a interface Client.
// b. A diferença é que esta herda da classe Commerce, enquanto a ResidentialClient herda da classe Residence. Além disso, uma leve diferença que que enquanto um nesta há um atributo cnpj, na ResidentialClient há o cpf.

// E6 - a. Da classe Industry, pois o cliente industrial necessita da quantidade de máquinas para o calculo de sua conta, e este atributo é da classe Industry.
// b. Client, pois necessitamos dos atributos presentes nela para o registro do cliente e do método para o calculo da conta.
// c. Pois muitos dos atributos são públicos, podendo ser alterados sem o uso de um setter.

// E7 - Feito.

// E8 - Feito.
