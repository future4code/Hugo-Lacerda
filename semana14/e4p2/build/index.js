"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const arquivo = process.argv[2];
const tarefa = process.argv[3];
fs.appendFileSync(arquivo, '\r\n' + tarefa);
//# sourceMappingURL=index.js.map