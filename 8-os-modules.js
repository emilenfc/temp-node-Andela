///////this is used to check the info about operating system you are using


const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user)

//method return the uptime in second

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOs)