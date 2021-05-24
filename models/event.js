const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Favorite event
const eventSchema = new Schema({
  title: { type: String, required: true },
  id: { type: String, required: true },
  odds: { type: String, required: true },
  thumbnail: { type: String },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
