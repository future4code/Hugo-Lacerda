"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class StudentRoll {
    constructor(roll) {
        this.roll = roll;
        this.getStudentAge = (id) => {
            let age = undefined;
            this.roll.map((student) => {
                if (id === Number(student.id)) {
                    age = moment().diff(student.birthdate, "years");
                }
            });
            return age;
        };
    }
}
exports.default = StudentRoll;
//# sourceMappingURL=StudentsRoll.class.js.map