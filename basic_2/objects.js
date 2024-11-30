

const obj1= new Object();// initiate an object 
obj1.hero="John";
obj1.hero2=30;
obj1.rank=1;

//console.log(obj1);
const obj2 ={}// another way to make an object 
obj2.name="noone";
obj2.age=20;

console.log(obj1['age']);// we can use this symbol to acces element in object
const obj3 = Object.assign({},obj1,obj2);// this is a way to copy object
console.log(obj3);

const obj4 ={...obj1,...obj2}//this is use of spread operator to copy object
console.log(obj4);// return the object
console.log(Object.keys(obj1));// get all the keys value of obj1 in a array
console.log(Object.values(obj1));// get all the  values of the object


