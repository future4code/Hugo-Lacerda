import Bank from "./Bank";
import UserAccount from "./UserAccount";

const CoolBank = new Bank();

// const KiraAccount: UserAccount = new UserAccount('Kira', 40, '35349020-1');

const account = CoolBank.addToAccountBalance("35349020-1", "Kira", 300);
console.log(account);
