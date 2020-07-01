"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Place_1 = __importDefault(require("./Place"));
class Industry extends Place_1.default {
    constructor(machinesQuantity, 
    // Refere-se à quantidade de máquinas do local 
    cep) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
    }
}
exports.default = Industry;
