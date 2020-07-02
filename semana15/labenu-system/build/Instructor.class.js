"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPECIALIZATION = void 0;
const moment = require("moment");
class Instuctor {
    constructor(id, name, email, birthdate, specializations) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.specializations = specializations;
        this.getAge = () => {
            return moment().diff(this.birthdate, "years");
        };
        this.getId = () => {
            return this.id;
        };
        this.getName = () => {
            return this.name;
        };
        this.getSpecializations = () => {
            return this.specializations;
        };
    }
}
exports.default = Instuctor;
var SPECIALIZATION;
(function (SPECIALIZATION) {
    SPECIALIZATION["REACT"] = "REACT";
    SPECIALIZATION["REDUX"] = "REDUX";
    SPECIALIZATION["CSS"] = "CSS";
    SPECIALIZATION["TESTES"] = "TESTES";
    SPECIALIZATION["TYPESCRIPT"] = "TYPESCRIPT";
    SPECIALIZATION["OOP"] = "OOP";
    SPECIALIZATION["BACKEND"] = "BACKEND";
})(SPECIALIZATION = exports.SPECIALIZATION || (exports.SPECIALIZATION = {}));
//# sourceMappingURL=Instructor.class.js.map