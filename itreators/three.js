

// for in and for off
//     {
//     name:"mark42",
//     type: "magic"
// }
//console.log(array[2]);
let arr =[1,2,3,4,5]

for (const value of arr) {
    console.log(`${value}`);
    
}
const name ="noone bgmi"
for (const value of name) {
    console.log(`${value}`)
}
const map= new Map();// mao is a type of object which have all unique value no copies 
map.set("name","mark");
map.set("age",25);
map.set("city","delhi");
for (const [key,value] of map){
    console.log(`${key} : ${value}`)
}