const { readFile, writeFile } = require('fs')
 
console.log("start")
readFile('./content/subFolder/text.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/subFolder/secondtxt.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result

        writeFile('./content/subFolder/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log("done with task")
        })
    })

})

console.log("starting next task")