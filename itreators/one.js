// for loop 
// lets understand  a simple loop

let myname = "noone"
for (let i= 0; i<=10; i++) {
    console.log(`${i} -${myname}`);
    }
// print numbers 1-10
// lets understand a simple loop with conditionals
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
        }
        }
// lets understand the nested loops
 for(let i = 1;i<=10;i++){
    console.log(`table of ${i} is `);
    for(let j= 1;j<=10;j++){
       console.log(`${i} * ${j} = ${i*j}`)
    }// print the complete table fro 1 to 10

 }
// printing array in for loops 
let myarray = [1, 2, 3, 4, 5,
    6, 7, 8, 9, 10];
    for (let i = 0; i < myarray.length; i++) {
        console.log(myarray[i]);
    }
    