"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Place_1 = __importDefault(require("./Place"));
class Residence extends Place_1.default {
    constructor(residentsQuantity, 
    // Refere-se ao número de moradores da casa
    cep) {
        super(cep);
        this.residentsQuantity = residentsQuantity;
    }
}
exports.default = Residence;
