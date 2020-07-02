import FileManager from "./FileManager.class";
import * as moment from "moment";
import Student from "./Student.class";
import Instructor, { SPECIALIZATION } from "./Instructor.class";
import { MODULE } from "./Mission.abstract";
import FullTimeMission from "./FullTimeMission.class";
import NightTimeMission from "./NightTimeMission.class";
import StudentsRoll from "./StudentsRoll.class";

const student01 = new Student(
  1,
  "Stud One",
  "student@one.com",
  moment(19900101, "YYYYMMDD")
);
const student02 = new Student(
  2,
  "Stud Two",
  "student@two.com",
  moment(19910101, "YYYYMMDD")
);
const student03 = new Student(
  3,
  "Stud Three",
  "student@three.com",
  moment(19920101, "YYYYMMDD")
);
const student04 = new Student(
  4,
  "Stud Four",
  "student@four.com",
  moment(19930101, "YYYYMMDD")
);
const student05 = new Student(
  5,
  "Stud 5",
  "student@five.com",
  moment(19940101, "YYYYMMDD")
);
const student06 = new Student(
  6,
  "Stud Six",
  "student@six.com",
  moment(19950101, "YYYYMMDD")
);
const student07 = new Student(
  7,
  "Stud Seven",
  "student@seven.com",
  moment(19960101, "YYYYMMDD")
);
const student08 = new Student(
  8,
  "Stud Eight",
  "student@eight.com",
  moment(19970101, "YYYYMMDD")
);
const student09 = new Student(
  9,
  "Stud Nine",
  "student@nine.com",
  moment(19980101, "YYYYMMDD")
);
const student10 = new Student(
  10,
  "Stud Ten",
  "student@ten.com",
  moment(19990101, "YYYYMMDD")
);

const instructor1 = new Instructor(
  1,
  "Inst One",
  "inst@one.com",
  moment(19901010, "YYYYMMDD"),
  [SPECIALIZATION.REACT, SPECIALIZATION.TESTES, SPECIALIZATION.REDUX]
);
const instructor2 = new Instructor(
  2,
  "Inst Two",
  "inst@two.com",
  moment(19911010, "YYYYMMDD"),
  [SPECIALIZATION.BACKEND, SPECIALIZATION.TESTES, SPECIALIZATION.OOP]
);
const instructor3 = new Instructor(
  3,
  "Inst Three",
  "inst@three.com",
  moment(19921010, "YYYYMMDD"),
  [SPECIALIZATION.CSS, SPECIALIZATION.REACT, SPECIALIZATION.REDUX]
);
const instructor4 = new Instructor(
  4,
  "Inst Four",
  "inst@four.com",
  moment(19931010, "YYYYMMDD"),
  [SPECIALIZATION.OOP, SPECIALIZATION.TYPESCRIPT]
);
const instructor5 = new Instructor(
  5,
  "Inst Five",
  "inst@five.com",
  moment(19941010, "YYYYMMDD"),
  [
    SPECIALIZATION.REACT,
    SPECIALIZATION.TESTES,
    SPECIALIZATION.REDUX,
    SPECIALIZATION.OOP,
    SPECIALIZATION.TYPESCRIPT,
  ]
);

const missionA = new FullTimeMission(
  111,
  moment(20200108, "YYYYMMDD"),
  moment(20200708, "YYYYMMDD"),
  MODULE.SEVEN
);
missionA.setName("A");
missionA.addInstructor(instructor1);
missionA.addStudent(student01);
missionA.addStudent(student02);

const missionB = new FullTimeMission(
  222,
  moment(20191208, "YYYYMMDD"),
  moment(20200608, "YYYYMMDD")
);
missionB.setName("B");
missionB.addInstructor(instructor2);
missionB.addStudent(student03);
missionB.addStudent(student04);

const missionC = new FullTimeMission(
  333,
  moment(20200208, "YYYYMMDD"),
  moment(20200808, "YYYYMMDD"),
  MODULE.FIVE
);
missionC.setName("C");
missionC.addInstructor(instructor3);
missionC.addStudent(student05);
missionC.addStudent(student06);

const missionD = new NightTimeMission(
  444,
  moment(20200308, "YYYYMMDD"),
  moment(20200908, "YYYYMMDD"),
  MODULE.FOUR
);
missionD.setName("D-na-night");
missionD.addInstructor(instructor4);
missionD.addStudent(student07);
missionD.addStudent(student08);

const missionE = new NightTimeMission(
  555,
  moment(20200408, "YYYYMMDD"),
  moment(20201008, "YYYYMMDD"),
  MODULE.THREE
);
missionE.setName("E-na-night");
missionE.addInstructor(instructor5);
missionE.addStudent(student09);
missionE.addStudent(student10);

const studentsFM = new FileManager("students.json");
const instructorsFM = new FileManager("instructors.json");
const missionsFM = new FileManager("missions.json");

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

missionsFM.writeFile([missionA, missionB, missionC, missionD, missionE]);

const allStudents = new StudentsRoll(studentsFM.readFile());

const someStudAge = allStudents.getStudentAge(9);

console.log(someStudAge);
