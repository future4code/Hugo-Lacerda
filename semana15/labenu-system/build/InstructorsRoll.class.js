"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class InstructorsRoll {
    constructor(roll) {
        this.roll = roll;
        this.getInstructorAge = (id) => {
            let age = undefined;
            this.roll.map((instructor) => {
                if (id === Number(instructor.id)) {
                    age = moment().diff(instructor.birthdate, "years");
                }
            });
            return age;
        };
    }
}
exports.default = InstructorsRoll;
//# sourceMappingURL=InstructorsRoll.class.js.map