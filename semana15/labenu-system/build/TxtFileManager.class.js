"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class TxtFileManager {
    constructor(filePath) {
        this.filePath = filePath;
    }
    setFilePath(path) {
        this.filePath = path;
    }
    writeFile(data) {
        fs.writeFileSync(this.filePath, data);
    }
    readFile() {
        const data = fs.readFileSync(this.filePath);
        return data;
    }
}
exports.default = TxtFileManager;
//# sourceMappingURL=TxtFileManager.class.js.map