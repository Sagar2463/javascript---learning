// prptotype in js
const {log} =require("console");
 function Animal(name, age) {
    this.name = name;
    this.age = age;
 }
 const wild=new Animal("tiger",23)
 console.log(wild.name)
// we can set prototype or new method to any array or objects
testarr=[1,2,3,4,5,6,7]
// there i no define method for getting the sum of all the number inside the arr
// we can use prototype to add a method to the array or any future array as a method
Array.prototype.sum=function(){
    let sum=0
    for(let i=0;i<this.length;i++){
        sum+=this[i]
        }
    return sum
    }
// now we can use the sum method on any array
 log(testarr.sum()) // output 28

 //similarly we know everything in js is object so we can create a prototype method of object which will be accesable 
 //by all
Object.prototype.checkme=function(){
        return `this is also a object`
    }
log(testarr.checkme())// here testarr is a arr but behind it is also an object 
// so we can use the checkme method on it
user={
    name:"john",
    age:23
}
log(user.checkme())// this will also return same thing 
let num=123345
log(num.checkme())// this will also return same thing