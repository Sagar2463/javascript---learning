class User{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length<3){
            throw new Error("Name must be at least 3 characters long");
            }
            this._name=value;
    }
}
class fk extends User{
    constructor(name,age,city){
        super(name,age),
        this.city=city}     
}
const me=new fk("heee",12,"delhi")
console.log(me)

//proper use of getter and setter in classes
class User1 {
    constructor(name, age) {
        this.name = name; // Invokes the setter, ensuring validation
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 3) {
            throw new Error("Name must be at least 3 characters long");
        }
        this._name = value;
    }
}

try {
    const user2 = new User("John", 25); // Properly initialized with valid name
    console.log(user2.name); // Output: John
} catch (error) {
    console.error(error.message);
}
// we can use get and set method in function and objects too lets see function
function User5(name,age){
    this.name=name;
    this.age=age;
    }
    Object.defineProperty(User5,"name",{
        get:function(){
            return this._name;
            },
            set:function(value){
                if(value.length<3){
                    throw new Error("Name must be at least 3 characters long");
                    }
                    this._name=value;
                }})
const ME=new User5("heyy",78)
try{
    console.log(ME.name)
    }catch(error){
        console.error(error.message)
        }

        // we can do smae thing in objects 
const user6={
_name:"hello",
age:78,
get name(){
    return this._name;
        },
set name(value){
    if(value.length<3){
        throw new Error("Name must be at least 3 characters long");
            }
    this._name=value;
    }}
try{
    console.log(user6.name)
    }catch(error){
        console.error(error.message)
        }

    

        

