"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MainTaskManager_class_1 = require("./MainTaskManager.class");
const taskManager = new MainTaskManager_class_1.default();
const arg = process.argv[4];
switch (arg) {
    case "students":
        taskManager.studentsLog();
        break;
    case "instructors":
        taskManager.instructorsLog();
        break;
}
//# sourceMappingURL=index.js.map