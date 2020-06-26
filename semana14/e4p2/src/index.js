"use strict";
exports.__esModule = true;
var fs = require("fs");
var arquivo = process.argv[2];
var tarefa = process.argv[3];
fs.appendFileSync(arquivo, '\r\n' + tarefa);

