const {log} = require("console");
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

  const filteredBooks = books.filter((book) => {
    return book.rating > 3;// its return a set of array in call back function 
  });
  
  //console.log(filteredBooks);
// we can do this in one line like
const filteredgenre = books.filter(book => book.genre == "Fiction" && book.rating > 4);
  
console.log(filteredgenre);
