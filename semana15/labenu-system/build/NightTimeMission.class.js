"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mission_abstract_1 = require("./Mission.abstract");
class NightTimeMission extends Mission_abstract_1.default {
    constructor(id, startDate, endDate, currentModule = undefined, instructors = [], students = []) {
        super(id, startDate, endDate, currentModule, instructors, students);
        this.name = "";
        this.setName = (name) => {
            if (name.indexOf("-na-night") !== -1) {
                this.name = name;
            }
            else {
                console.log("Nome inválido: turmas noturnas devem terminar com o sufixo '-na-night'");
            }
        };
    }
}
exports.default = NightTimeMission;
//# sourceMappingURL=NightTimeMission.class.js.map