"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class FileManager {
    constructor(filePath) {
        this.filePath = filePath;
    }
    setFilePath(path) {
        this.filePath = path;
    }
    writeFile(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }
    readFile() {
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    }
}
exports.default = FileManager;
//# sourceMappingURL=FileManager.class.js.map