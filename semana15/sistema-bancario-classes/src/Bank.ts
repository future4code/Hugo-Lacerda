import UserAccount from "./UserAccount";
import JSONFileManager from "./JSONFileManager";
import Transaction from './Transaction';
import { Console } from "console";

export default class Bank {
    private fileManager: JSONFileManager = new JSONFileManager("bank.json");
    private accounts: UserAccount[];

  constructor() {
    const accountList: any = this.fileManager.getObjectFromFIle();
    this.accounts = accountList;
  }

  public createAccount = (userAccount: UserAccount): void => {
    let mayProceed: boolean = true;
    this.accounts.filter((accountData) => {
      if (accountData.cpf == userAccount.cpf) {
        mayProceed = false;
      }
    });
    if(userAccount.age < 18){
        mayProceed = false;
    }

    if (!mayProceed) {
      console.log("Ação inválida! CPF já associado a uma conta existente ou sua idade é menor que 18 anos.");
    } else {
      const accountList: any = this.fileManager.getObjectFromFIle();
      accountList.push(userAccount);
      this.fileManager.writeObjectToFile(accountList);
      this.accounts = accountList;
      console.log("Conta adicionada com sucesso.");
    }
  };

  public getAllAccounts = (): UserAccount[] => this.accounts;

  public getAccountByCPFAndName = (
    cpf: string,
    name: string
  ): UserAccount | undefined => {
    let account: UserAccount | undefined = undefined;

    this.accounts.filter((accountData) => {
      if (accountData.name === name && accountData.cpf === cpf) {
        account = accountData;
      }
    });

    return account;
  };

  public getAccountBalance = (
    cpf: string,
    name: string
  ): number | undefined => {
 
    const account: UserAccount = this.getAccountByCPFAndName(cpf, name);

    return account.getBalance();
  };

  public addToAccountBalance = (
    cpf: string,
    name: string,
    value: number
  ): Transaction[] | undefined => {
 
    const account: UserAccount = this.getAccountByCPFAndName(cpf, name);

    account.balance += value;

    const newTransaction = new Transaction(1231241234, value, 'Saldo adicionado.');

    let newAccountTransactions = [...account.transactions, newTransaction];

    account.transactions = newAccountTransactions;


    this.fileManager.writeObjectToFile(this.accounts);

    return account.transactions;
  };
}
