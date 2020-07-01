"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Place_1 = __importDefault(require("./Place"));
class Commerce extends Place_1.default {
    constructor(floorsQuantity, 
    // Refere-se à quantidade de andares do lugar
    cep) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
    }
}
exports.default = Commerce;
