"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileManager_class_1 = require("./FileManager.class");
const moment = require("moment");
const Student_class_1 = require("./Student.class");
const Instructor_class_1 = require("./Instructor.class");
const Mission_abstract_1 = require("./Mission.abstract");
const FullTimeMission_class_1 = require("./FullTimeMission.class");
const NightTimeMission_class_1 = require("./NightTimeMission.class");
const StudentsRoll_class_1 = require("./StudentsRoll.class");
const student01 = new Student_class_1.default(1, "Stud One", "student@one.com", moment(19900101, "YYYYMMDD"));
const student02 = new Student_class_1.default(2, "Stud Two", "student@two.com", moment(19910101, "YYYYMMDD"));
const student03 = new Student_class_1.default(3, "Stud Three", "student@three.com", moment(19920101, "YYYYMMDD"));
const student04 = new Student_class_1.default(4, "Stud Four", "student@four.com", moment(19930101, "YYYYMMDD"));
const student05 = new Student_class_1.default(5, "Stud 5", "student@five.com", moment(19940101, "YYYYMMDD"));
const student06 = new Student_class_1.default(6, "Stud Six", "student@six.com", moment(19950101, "YYYYMMDD"));
const student07 = new Student_class_1.default(7, "Stud Seven", "student@seven.com", moment(19960101, "YYYYMMDD"));
const student08 = new Student_class_1.default(8, "Stud Eight", "student@eight.com", moment(19970101, "YYYYMMDD"));
const student09 = new Student_class_1.default(9, "Stud Nine", "student@nine.com", moment(19980101, "YYYYMMDD"));
const student10 = new Student_class_1.default(10, "Stud Ten", "student@ten.com", moment(19990101, "YYYYMMDD"));
const instructor1 = new Instructor_class_1.default(1, "Inst One", "inst@one.com", moment(19901010, "YYYYMMDD"), [Instructor_class_1.SPECIALIZATION.REACT, Instructor_class_1.SPECIALIZATION.TESTES, Instructor_class_1.SPECIALIZATION.REDUX]);
const instructor2 = new Instructor_class_1.default(2, "Inst Two", "inst@two.com", moment(19911010, "YYYYMMDD"), [Instructor_class_1.SPECIALIZATION.BACKEND, Instructor_class_1.SPECIALIZATION.TESTES, Instructor_class_1.SPECIALIZATION.OOP]);
const instructor3 = new Instructor_class_1.default(3, "Inst Three", "inst@three.com", moment(19921010, "YYYYMMDD"), [Instructor_class_1.SPECIALIZATION.CSS, Instructor_class_1.SPECIALIZATION.REACT, Instructor_class_1.SPECIALIZATION.REDUX]);
const instructor4 = new Instructor_class_1.default(4, "Inst Four", "inst@four.com", moment(19931010, "YYYYMMDD"), [Instructor_class_1.SPECIALIZATION.OOP, Instructor_class_1.SPECIALIZATION.TYPESCRIPT]);
const instructor5 = new Instructor_class_1.default(5, "Inst Five", "inst@five.com", moment(19941010, "YYYYMMDD"), [
    Instructor_class_1.SPECIALIZATION.REACT,
    Instructor_class_1.SPECIALIZATION.TESTES,
    Instructor_class_1.SPECIALIZATION.REDUX,
    Instructor_class_1.SPECIALIZATION.OOP,
    Instructor_class_1.SPECIALIZATION.TYPESCRIPT,
]);
const missionA = new FullTimeMission_class_1.default(111, moment(20200108, "YYYYMMDD"), moment(20200708, "YYYYMMDD"), Mission_abstract_1.MODULE.SEVEN);
missionA.setName("A");
missionA.addInstructor(instructor1);
missionA.addStudent(student01);
missionA.addStudent(student02);
const missionB = new FullTimeMission_class_1.default(222, moment(20191208, "YYYYMMDD"), moment(20200608, "YYYYMMDD"));
missionB.setName("B");
missionB.addInstructor(instructor2);
missionB.addStudent(student03);
missionB.addStudent(student04);
const missionC = new FullTimeMission_class_1.default(333, moment(20200208, "YYYYMMDD"), moment(20200808, "YYYYMMDD"), Mission_abstract_1.MODULE.FIVE);
missionC.setName("C");
missionC.addInstructor(instructor3);
missionC.addStudent(student05);
missionC.addStudent(student06);
const missionD = new NightTimeMission_class_1.default(444, moment(20200308, "YYYYMMDD"), moment(20200908, "YYYYMMDD"), Mission_abstract_1.MODULE.FOUR);
missionD.setName("D-na-night");
missionD.addInstructor(instructor4);
missionD.addStudent(student07);
missionD.addStudent(student08);
const missionE = new NightTimeMission_class_1.default(555, moment(20200408, "YYYYMMDD"), moment(20201008, "YYYYMMDD"), Mission_abstract_1.MODULE.THREE);
missionE.setName("E-na-night");
missionE.addInstructor(instructor5);
missionE.addStudent(student09);
missionE.addStudent(student10);
const studentsFM = new FileManager_class_1.default("students.json");
const instructorsFM = new FileManager_class_1.default("instructors.json");
const missionsFM = new FileManager_class_1.default("missions.json");
studentsFM.writeFile([
    student01,
    student02,
    student03,
    student04,
    student05,
    student06,
    student07,
    student08,
    student09,
    student10,
]);
instructorsFM.writeFile([
    instructor1,
    instructor2,
    instructor3,
    instructor4,
    instructor5,
]);
const allStudents = new StudentsRoll_class_1.default(studentsFM.readFile());
const someStudAge = allStudents.getStudentAge(9);
console.log(someStudAge);
//# sourceMappingURL=index.js.map