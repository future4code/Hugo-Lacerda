import * as fs from 'fs'


export default class JSONFileManager {

  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName
  }
  writeObjectToFile(objectToSave: Object) {
    fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2))
  }

  getObjectFromFIle(): Object {
    return fs.readFileSync(this.fileName).toString() ? JSON.parse(fs.readFileSync(this.fileName).toString()) : [];
  }
}
