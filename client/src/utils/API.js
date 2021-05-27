import axios from "axios";

export default {
  // Gets all books
  getAllEvents: function(){
    return axios.get("https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=us&mkt=h2h&dateFormat=iso&apiKey=f08c01c66df2ac3ace50b95ad3805d91");
  },
  getUserEvents: function(user){
    return axios.get("api/events/" + user);
  },
  getSavedEvent: function(eventId){
    return axios.get("api/events/one/" + eventId);
  },
  getHeadlines: function(query){
    return axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2021-05-15&to=2021-05-26&sortBy=popularity&apiKey=f9706e42f9ac4d44a209a460017630c3`)
  },
  // Deletes the book with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a book to the database
  saveEvent: function(event) {
    return axios.post("/api/events/", {
      "title": `${event.teams[0]} vs ${event.teams[1]}`,
      "id": `${event.id}`,
      "odds": `${event.sites[0].odds.h2h[0]}`
    }); 
    // axios.post("/api/books", bookData);
  },
  saveToUser: function(user, eventId){
    return axios.post("api/events/user", {"user":user, "eventId":eventId});
  }
};

