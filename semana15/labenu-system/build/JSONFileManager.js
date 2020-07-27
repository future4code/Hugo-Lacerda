"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeObjectToFile(objectToSave) {
        fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2));
    }
    getObjectFromFIle() {
        return fs.readFileSync(this.fileName).toString() ? JSON.parse(fs.readFileSync(this.fileName).toString()) : [];
    }
}
exports.default = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map