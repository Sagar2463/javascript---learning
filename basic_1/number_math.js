const { log } = require("console");

const num1 = 24;
const num2 = new Number(234.3445)

// console.log(typeof(num2));// return object 
// console.log(typeof(num1));// return number

const score = 234.89;
// console.log(score.toPrecision(),score.toString(),score.toFixed(1));// toFixed return the value after the point to only 1 234.8
// console.log(num2.toPrecision());


// ++++++++++++++++ math ++++++++++++++

// console.log(Math.round(num2))//return 234
// console.log(Math.abs(num2));// return 234.3445
// console.log(Math.ceil(num2));// return 235
// console.log(Math.floor(num2));// return234

// question find the random number between max_value and min_value 
// const min = 10;
// const max = 30;
//console.log(Math.floor((Math.random() * (max - min ))+1));
const randomnum = ()=>{
    const max = 30;
    const min = 10;
     return (Math.floor((Math.random() * (20)+1)+min))
}
//console.log(randomnum());// return random number between 10-30


// +++++++++++ DATE +++++++++
// console.log(new Date(Date.now()).toLocaleString());












const newMaxlimit = 40
const newMinlimit = 30

console.log(Math.round((Math.random()* (newMaxlimit-newMinlimit) + 1)+ newMinlimit))



