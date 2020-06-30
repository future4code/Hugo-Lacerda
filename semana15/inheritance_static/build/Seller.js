"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Seller extends Employee_1.default {
    constructor() {
        super(...arguments);
        this.salesQuantity = 0;
    }
    getSalesQuantity() {
        return this.salesQuantity;
    }
    setSalesQuantity(quantity) {
        this.salesQuantity = quantity;
    }
    calculateTotalSalary() {
        return this.baseSalary + Employee_1.default.BENEFITS_VALUE + this.salesQuantity * Seller.SALE_COMMISSION;
    }
}
exports.default = Seller;
Seller.SALE_COMMISSION = 5;
