// reduce and map loops 
//map use 
const numbers = [1, 2, 3, 4, 5];
 
const doublenumber= numbers.map((key)=>{
    return key*2
}).map((key)=>key +1).filter((key)=>key -2)
//console.log(doublenumber)
//reduce use
const number = [1, 2, 3, 4, 5];
const sum = number.reduce((accumulator, currentvalue) => accumulator+currentvalue,0)// here this zero is a initiator value which is passed to the accumaltor
console.log(sum)
// return the sum of all the numbers in array
// now lets use  map and reduce both  together
const number1s = [1, 2, 3, 4, 5];
const sumOftwicearray=number1s.map((key)=>key*2).reduce((accumulator,currentvalue)=>accumulator+currentvalue,0)
console.log(sumOftwicearray)
// can we use map in object?