
const myName ="sagar_singh"
// primitive string
const Myname = new String("sunil_singh");
// object string 
console.log(Myname.length);//gives the length of string
console.log(myName.replace("_"," "));
console.log(Myname.slice(0,7));
console.log(Myname.indexOf("u"));

// the main differnce between the object string and the primitive which can affect the output can be understand by this 

const calc = "2+2"
//primitive
const calc2=new String("2+2")
//object string
//console.log(calc.eval());
// print the method is not valid
console.log(calc2.valueOf());
console.log(calc.valueOf())
console.log(`this is ${calc}`);

