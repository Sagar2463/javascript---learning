const { log } = require("console")

const user ={
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
status: function(){
    log(` the name ${this.name} and the age ${this.age}`)// we can use the this word inside object to aacees the element 
    log(this)// in node enviroment if we print this then it will show complete object
}
}
log(user.status())
log(this)// if we use this in a global scope it print a empty object but in browsers console it shows a window object
// can we use this inside a function scopes
const add =function(){
    log(this)// this will print node env global object
}
add()// 