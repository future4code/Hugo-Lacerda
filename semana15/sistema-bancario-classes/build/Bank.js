"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const Transaction_1 = require("./Transaction");
class Bank {
    constructor() {
        this.fileManager = new JSONFileManager_1.default("bank.json");
        this.createAccount = (userAccount) => {
            let mayProceed = true;
            this.accounts.filter((accountData) => {
                if (accountData.cpf == userAccount.cpf) {
                    mayProceed = false;
                }
            });
            if (userAccount.age < 18) {
                mayProceed = false;
            }
            if (!mayProceed) {
                console.log("Ação inválida! CPF já associado a uma conta existente ou sua idade é menor que 18 anos.");
            }
            else {
                const accountList = this.fileManager.getObjectFromFIle();
                accountList.push(userAccount);
                this.fileManager.writeObjectToFile(accountList);
                this.accounts = accountList;
                console.log("Conta adicionada com sucesso.");
            }
        };
        this.getAllAccounts = () => this.accounts;
        this.getAccountByCPFAndName = (cpf, name) => {
            let account = undefined;
            this.accounts.filter((accountData) => {
                if (accountData.name === name && accountData.cpf === cpf) {
                    account = accountData;
                }
            });
            return account;
        };
        this.getAccountBalance = (cpf, name) => {
            const account = this.getAccountByCPFAndName(cpf, name);
            return account.getBalance();
        };
        this.addToAccountBalance = (cpf, name, value) => {
            const account = this.getAccountByCPFAndName(cpf, name);
            account.balance += value;
            const newTransaction = new Transaction_1.default(1231241234, value, 'Saldo adicionado.');
            let newAccountTransactions = [...account.transactions, newTransaction];
            account.transactions = newAccountTransactions;
            this.fileManager.writeObjectToFile(this.accounts);
            return account.transactions;
        };
        const accountList = this.fileManager.getObjectFromFIle();
        this.accounts = accountList;
    }
}
exports.default = Bank;
//# sourceMappingURL=Bank.js.map