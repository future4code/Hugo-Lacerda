import * as fs from 'fs'

const arquivo: string = process.argv[2]
const tarefa: string = process.argv[3]

fs.appendFileSync(arquivo, '\r\n'+tarefa);