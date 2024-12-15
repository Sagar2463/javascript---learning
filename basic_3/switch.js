

// if else conditon to control the flow is too much to type so we use switch
let number=2
switch(number){
    case 1:
        console.log("one");
        break;// break the loop 
    case 2:
            console.log("two");
         break;
    
            default:  // if no case match then it runs the default status 
                console.log("default");
}
// lets understand this ?? 
console.log(10 ?? 20);// will print 10
// lets understand this ??
console.log(10 ?? 20 ?? 30);// will print 10
const add =function(num1,num2){
    console.log(num1 + num2 );
    
}
console.log(undefined ?? `${add(2,3)}`);// print 5
// it help to give response even if some wrong or empty response come 

// lets see some falsy value
let a = 0;
let b = "";
let c = null;
let d = false;
// truthy value
let e =[];
let f ={};
if (a){
    console.log("a is truthy");
}
else{
    console.log("a is falsy");// this will be printed
    }
if(b){
    console.log("b is truthy");
    }else{
        console.log("b is falsy");//this will be printed
}
if(c){
    console.log("c is truthy");
}
else{
    console.log("c is falsy");// this will be printed
    }
if(d){
     console.log("d is truthy");
    }
else{
     console.log("d is falsy");// this will be printed
    }
if(e){
    console.log("e is truthy");// this will be printed
    }
else{
    console.log("e is falsy");
     }
if(f){
    console.log("f is truthy");// this will be printed
    }
else{
    console.log("f is falsy");
     }
// how we can see if the object and array have some value or not 

if(e.length==0){
    console.log("a is empty");// to check for array
}
if((Object.keys(f)).length==0){
    console.log("b is empty");// to check for object
}