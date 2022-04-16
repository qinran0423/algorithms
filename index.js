const fs = require('fs')
const path = require('path')
const dir = path.resolve(__dirname, './')

let files = fs.readdirSync(dir)

console.log(files);
