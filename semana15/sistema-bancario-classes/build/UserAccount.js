"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(newName, newAge, newCPF) {
        this.balance = 0;
        this.transactions = [];
        this.name = newName;
        this.age = newAge;
        this.cpf = newCPF;
    }
    ;
    getBalance() {
        return this.balance;
    }
    ;
    addBalance(value) {
        this.balance += value;
    }
}
exports.default = UserAccount;
//# sourceMappingURL=UserAccount.js.map