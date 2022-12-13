const path = require('path')

console.log(path.sep)

//to ckeck for path
const filePath = path.join('/content/', 'subfolder', 'text.txt')

console.log(filePath)
//to ckeck final path
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.text')
console.log(absolute)