const {readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/subFolder/text.txt', 'utf8')

const second = readFileSync('./content/subFolder/secondtxt.txt', 'utf8')

writeFileSync('./content/subFolder/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})
//here flag {flag: 'a'} is used to add pushed word on existing one