const arr1 = new Array(1,2,3,4,5,6,);
let arr2 = [7,8,9,10];

 console.log(arr1.includes(3));// returns true 
 console.log(arr1.join()); // return strng value 1,2,3,4,5,6,
  // concat functon 
  let arr3 = arr1.concat(arr2);
  console.log(arr3);// return 1,2,3,4,5,6,7,8,9,10
 // " remeber concat function return a new array without cahnging the arr
  console.log(arr1.slice(1,4));// return 2,3,4
 console.log(arr1.splice(1,3));// return 2,3,4 but 
 console.log(arr1);// the splice completetely remove the part it cut so it changes in main array

 let arr4 = [...arr1,...arr2,...arr3];// this is called spread method which add all the arr to 1 arr
 console.log(arr4);// return all array

 let arr5 =["noone", 45,3,4,5,[2,3,4,5,[3,4,5,"hello"]]]
 //we can add multiple layer of array inside a array 
 // we can seprate them by using 
 console.log(arr5.flat(Infinity)); // this will return all the array inside the array and remove

 arr1.push(100);//push the new value to the array
 console.log(arr1); // return 1,2,3,4,5,6,100

 arr1.pop();// delete the last arry element
 console.log(arr1); // return 1,2,3,4,5,6

 arr1.shift();// remove the first element off array and repostion all
 console.log(arr1);
 
 arr1.unshift(100);// add the value to the start of array and repostion all accordingly
 console.log(arr1); // return 100,1,2,3,4,5,


 let a = "noone"
  let b=Array.from(a)// it make the dtring to array form by breaking it 
  console.log(b);
  // another way 
  let c ="fuck1 2"
  let d = Array.of(c);// put the value in array form of string
  console.log(d);
 

 
 
 
 
 



