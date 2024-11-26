// initialize date 
let ok = Date.now()
console.log(typeof ok, ok);
// return the type as number if u initialize the date like this 

let mydate = new Date()
console.log(typeof mydate, mydate);
// return the type as object if u initialize the date like this

console.log(mydate.toLocaleString("default" ,{
    weekday: "long",
    year: "numeric",
// return 2024 Tuesday
}));

console.log(Math.floor(Date.now()/1000));
// return teh value in second and remove the decimal
console.log(mydate.toJSON());
// u can use multiple method