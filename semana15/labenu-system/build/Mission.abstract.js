"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODULE = void 0;
class Mission {
    constructor(id, startDate, endDate, currentModule = undefined, instructors = [], students = []) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.currentModule = currentModule;
        this.instructors = instructors;
        this.students = students;
        this.name = "";
        this.getId = () => {
            return this.id;
        };
        this.getName = () => {
            return this.name;
        };
        this.getStartDate = () => {
            return this.startDate;
        };
        this.getEndDate = () => {
            return this.endDate;
        };
        this.getCurrentModule = () => {
            return this.currentModule;
        };
        this.getInstructors = () => {
            return this.instructors;
        };
        this.getStudents = () => {
            return this.students;
        };
        this.addInstructor = (instructor) => {
            this.instructors.push(instructor);
        };
        this.addStudent = (student) => {
            this.students.push(student);
        };
        this.setName = (name) => {
            this.name = name;
        };
    }
}
exports.default = Mission;
var MODULE;
(function (MODULE) {
    MODULE["ONE"] = "FUNDAMENTOS WEB DEV";
    MODULE["TWO"] = "REACT E ASSINCRONICIDADE";
    MODULE["THREE"] = "REACT AVAN\u00C7ADO E HOOKS";
    MODULE["FOUR"] = "OOP";
    MODULE["FIVE"] = "BACKEND";
    MODULE["SIX"] = "INFRAESTRUTURA E DEVOPS";
    MODULE["SEVEN"] = "SOFTWARE DEV NO MUNDO REAL";
})(MODULE = exports.MODULE || (exports.MODULE = {}));
//# sourceMappingURL=Mission.abstract.js.map