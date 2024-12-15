
const myName ="sagar_singh"
// primitive string
const Myname = new String("sunil_singh");
// object string 
console.log(Myname.length);//gives the length of string
console.log(myName.replace("_"," "));// the value u want to replace 1st and to with 2nd 
console.log(Myname.slice(0,7));
console.log(Myname.indexOf("u"));

// the main differnce between the object string and the primitive which can affect the output can be understand by this 

const calc = "2+2"
//primitive
const calc2=new String("2+2")
//object string

console.log(calc2.valueOf())
console.log(calc.valueOf())
//  return "2+2" //they both return same output even they are different string

console.log(eval(calc2.valueOf()))//return 4 , it return this because it is a object type string 
// to make calculate the primitive string  we do this 

console.log(eval(calc.valueOf()))//return 4

console.log(`this is ${calc}`);// this is good way to write or call the value of variable by using the `${}` 
