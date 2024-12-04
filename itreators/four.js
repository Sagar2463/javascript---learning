const { log } = require("console");

// using for in loop 
const demoData = {
    user1: { id: 1, name: "Alice", age: 25, city: "New York" },
    user2: { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
    user3: { id: 3, name: "Charlie", age: 22, city: "Chicago" },
    user4: { id: 4, name: "David", age: 28, city: "Houston" },
    user5: { id: 5, name: "Eve", age: 35, city: "Phoenix" },
    user6: { id: 6, name: "Frank", age: 24, city: "Philadelphia" },
    user7: { id: 7, name: "Grace", age: 27, city: "San Antonio" },
    user8: { id: 8, name: "Hannah", age: 31, city: "San Diego" },
    user9: { id: 9, name: "Ivan", age: 29, city: "Dallas" },
    user10: { id: 10, name: "Jack", age: 26, city: "San Jose" }
};
//using for in loop on a object
 for( const key in demoData){
    //log(`the user is ${key} and the name is ${demoData[key].name} and his age is ${demoData[key].age}`)
 }
 // using for in loop in array
 const demoArray = [1, 2, 3, 4, 5,]
 for(const key in demoArray){
   // log(`at ${key}the number is ${demoArray[key]}`)// the difference in using it from for of is that we have the index and we can get the value using that index

 }
 const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      publishedYear: 1925,
      price: 10.99,
      rating: 4.4,
      available: true
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publishedYear: 1949,
      price: 9.99,
      rating: 4.7,
      available: true
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publishedYear: 1960,
      price: 12.49,
      rating: 4.8,
      available: false
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publishedYear: 1951,
      price: 8.99,
      rating: 4.2,
      available: true
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      publishedYear: 1813,
      price: 11.49,
      rating: 4.6,
      available: false
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publishedYear: 1937,
      price: 15.99,
      rating: 4.9,
      available: true
    },
    {
      id: 7,
      title: "Moby Dick",
      author: "Herman Melville",
      genre: "Adventure",
      publishedYear: 1851,
      price: 9.49,
      rating: 4.1,
      available: false
    },
    {
      id: 8,
      title: "War and Peace",
      author: "Leo Tolstoy",
      genre: "Historical Fiction",
      publishedYear: 1869,
      price: 14.99,
      rating: 4.5,
      available: true
    },
    {
      id: 9,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Adventure",
      publishedYear: 1988,
      price: 13.49,
      rating: 4.3,
      available: true
    },
    {
      id: 10,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      publishedYear: 1997,
      price: 19.99,
      rating: 4.9,
      available: true
    }
  ];
  books.forEach((key)=>{
    if(key.rating>4.5 && key.price>11.49){
        console.log(key);
    }
  } )