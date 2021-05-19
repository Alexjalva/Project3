import axios from "axios";

export default {
  // Gets all books
  getAllEvents: function(){
    return axios.get("https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=us&mkt=h2h&dateFormat=iso&apiKey=0bb50b81e73614c5ac2369b5f564c8d3");
  },
  getHeadlines: function(query){
    console.log(query);
    return axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2021-05-14&to=2021-05-14&sortBy=popularity&apiKey=f9706e42f9ac4d44a209a460017630c3`)
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};