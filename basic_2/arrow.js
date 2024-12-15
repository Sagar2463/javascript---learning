const { log } = require("console");

// create a  functon with arrow keywod
const add = (num1,num2)=>{
 log(num1 + num2)
    
}
add(1,2);
// we can do this thing in one line too like
const add2 = (num1,num2)=>log(num1 + num2)
add2(2,3);

// IIFE immediate invoked function expression
((num1 ,num2)=>{log(num1 + num2)})(2,3);
// we can invoked the iifw function with another way of creating function 
(function(number1,number2){log(number1-number2)})(3,1);

((a,b)=>{log(a+b)})(2,3)