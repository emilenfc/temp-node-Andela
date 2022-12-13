//  console.log(__dirname)
//  console.log(__filename)
///////
//  setInterval(()=>{
// console.log("hello wolrd")
//  },1000)
///////
//module
// const items = require('./6-alternative-flavor')

const data= require('./6-alternative-flavor')
const names = require('./4-names')
const sayHi = require('./5-utls')

require('./7-mind-grenade')

sayHi(names.john)
sayHi(names.peter)
sayHi('Emile')