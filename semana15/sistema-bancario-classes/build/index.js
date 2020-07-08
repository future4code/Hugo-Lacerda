"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = require("./Bank");
const CoolBank = new Bank_1.default();
const account = CoolBank.addToAccountBalance("35349020-1", "Kira", 300);
console.log(account);
//# sourceMappingURL=index.js.map