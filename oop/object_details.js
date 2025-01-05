//lets understand the object by one simple question
/* can we change the value of PI to any thing ?
answer is NO because PI is a constant in math and we can't change it
but why we can't ?
*/

const { log } = require("console")


Math.PI=23344
log(Math.PI)//IT WILL RETURN SAME LETS UNDERSTAND WHY
//There are few hidden properties which are coded 
//in the browser or in the node.js
log(Object.getOwnPropertyDescriptor(Math,"PI"))
//it will return { value: 3.141592653589793, writable: false,
//enumerable: false, configurable: false }

// we can create our own property like this to make it stop working 
//as a constant
/*

Object.defineProperty(Math,"PI",{value:23344,writable:true,enumerable:true,
    configurable:true})

*/
    // even doing this will not change the property of Math.pi AS ITS HARDCODED

MYdetails={
    name:"John",
    age:25
    }
Object.defineProperty(MYdetails,"name",{
    
    writable:false,
    enumerable:true,//can stop console log and loops if its false
    configurable:false
})
//now if we try to change the name of MYdetails
MYdetails.name="Johny"
//it will not change the name of MYdetails
log(MYdetails)


