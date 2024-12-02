function add (num1,num2){// create a function
    let sum = num1 + num2;
    return sum// return the value 
}
console.log((add(3,4)));
const sub = function(num1,num2){// another way to make the function () vvalue there is called parameters and when excuting sub() here they are called arguments

    return num1 - num2// we can directly return the value no need to assign to a variable 
}
console.log(sub(10,5));// giving the arguments


// ++++++++++++++++++++ scope in javascript ++++++++++++++++
// scope is the region of the code where a variable is defined and can be accessed
// there are two types of scope in javascript
// 1. global scope
// 2. local scope
// global scope
// variables defined in global scope can be accessed from any part of the code
let globalVar = "I am global variable";
console.log(globalVar);
// local scope
// variables defined in local scope can be accessed only in that block of code where they are defined
function localScope(){
    let localVar = "I am local variable";
    console.log(localVar);
    // we can't access localVar outside the localScope function 
    // localVar = "I am changed"; // this will give an error
    }
    // we can't access localVar outside the localScope function
    // localVar = "I am changed"; // this will give an error
    // we can access globalVar outside the localScope function  
    console.log(globalVar);
    // ++++++++++++++++++++ scope in javascript ++++++++++++++++
    // ++++++++++++++++++++ let and const in javascript ++++++++++++++++    
    // let and const are used to declare variables in javascript
    // let is used to declare a variable that can be reassigned
    // const is used to declare a variable that cannot be reassigned

    // let name = "John";
    // name = "Jane";
    // console.log(name);
    // ++++++++++++++++++++ let and const in javascript ++++++++++++++++
    // ++++++++++++++++++++ var in javascript ++++++++++++++++
    // var is used to declare a variable that can be reassigned
    // var is function scoped not block scoped
    // var is used in older versions of javascript
    
    // var name = "John";
    // name = "Jane";
    // console.log(name);
