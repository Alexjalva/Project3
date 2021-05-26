import axios from "axios";

export default {
  // Gets all books
  getAllEvents: function(){
    return axios.get("https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=us&mkt=h2h&dateFormat=iso&apiKey=0bb50b81e73614c5ac2369b5f564c8d3");
  },
  getHeadlines: function(query){
    return axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2021-05-15&to=2021-05-23&sortBy=popularity&apiKey=f9706e42f9ac4d44a209a460017630c3`)
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a book to the database
  saveEvent: function(event) {
    console.log(event);
    return axios.post("/api/events/", {
      "title": `${event.teams[0]} vs ${event.teams[1]}`,
      "id": `${event.id}`,
      "odds": `${event.sites[0].odds.h2h[0]}`
    }); 
    // axios.post("/api/books", bookData);
  },
  saveToUser: function(event){
    return axios.post("api/events/user", event.id);
  }
};

