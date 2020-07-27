"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class MissionRoll {
    constructor(roll) {
        this.roll = roll;
        this.studentsDataLog = () => {
            this.roll.forEach((mission) => {
                mission.students.forEach((student) => {
                    console.log(`
        Nome: ${student.name}
        Email: ${student.email}
        Curso: WEB DEV 
        Turma: ${mission.name} 
        Idade: ${moment().diff(student.birthdate, "years")}
        `);
                });
            });
        };
        this.instructorsDataLog = () => {
            this.roll.forEach((mission) => {
                mission.instructors.forEach((instructor) => {
                    console.log(`
        Nome: ${instructor.name}
        Email: ${instructor.email}
        Idade: ${moment().diff(instructor.birthdate, "years")}
        Especialidades: ${instructor.specializations}
        `);
                });
            });
        };
    }
}
exports.default = MissionRoll;
//# sourceMappingURL=MissionsRoll.class.js.map