
import axios from "axios";
require("dotenv").config();

export default {
  // Searches the NYT books according to the search criteria given in the form
  searchNewBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
  },
  // Gets saved Books
  getSavedBooks: function() {
     return axios.get("/api/books/").then(response => response.data);

  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the Book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a Book to the database
  saveBook: function(bookData) {
    console.log("bookData: ")
    console.log(bookData)
    return axios.post("/api/books", bookData);
  }
};