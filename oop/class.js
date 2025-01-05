/*
classes are also a available in js but just as syntactical suger they work in the vack just as normal function will work
as we know every thing in js is object
so lets understand class


*/

const { log } = require("console")

// a simple class
class User{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
}
// creating an object of the class
let user1=new User("John",25)
log(user1.name)
// lets understand inheritace in class
// in js we can use prototype to inherit a class
class Animal{
    constructor(name){
        this.name=name
        }
        }
class Dog extends Animal{
    constructor(name,age){
        super(name)
        this.age=age
            }
        }   
 // lets create an object of the class
let dog1=new Dog("sagar",25)
log(dog1.name)
// lets understand static method in class
// static method is a method that belongs to the class itself not to the object of the class
class Car{
    CarCounts=0
    constructor(name,model){
        this.name=name
        this.model=model
    }
    static CarCounts(){
        return 2
}
}
// lets create an object of the class
let car1=new Car("tata","safari")
//log(car1.CarCounts())// this  will return error as the method is not accesable
log(Car.CarCounts())

