"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class Student {
    constructor(id, name, email, birthdate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.getAge = () => {
            return moment().diff(this.birthdate, "years");
        };
        this.getId = () => {
            return this.id;
        };
        this.getName = (name) => {
            return this.name;
        };
    }
}
exports.default = Student;
//# sourceMappingURL=Student.class.js.map