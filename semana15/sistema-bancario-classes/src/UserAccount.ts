import Transaction from './Transaction';

export default class UserAccount {
    name: string;
    age: number;
    cpf: string;
    balance: number = 0;
    transactions: Transaction[] = [];

    constructor(newName: string, newAge: number, newCPF: string){
        this.name = newName;
        this.age = newAge;
        this.cpf = newCPF;
    };

    getBalance(): number{
        return this.balance
    };

    addBalance(value: number): void {
        this.balance += value;
    }
}