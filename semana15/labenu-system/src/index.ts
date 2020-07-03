import MainTaskManager from "./MainTaskManager.class";

const taskManager: MainTaskManager = new MainTaskManager();

const arg = process.argv[4];

switch (arg) {
  case "students":
    taskManager.studentsLog();
    break;
  case "instructors":
    taskManager.instructorsLog();
    break;
}
