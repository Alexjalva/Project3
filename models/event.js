const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Favorite event
const eventSchema = new Schema({
  title: { type: String, required: true },
  href: { type: String, required: true },
  event: { type: String, required: true },
  thumbnail: { type: String },
  selected: {type: Boolean, default: false },
  // username : [{type: Schema.Types.ObjectId, ref: 'Users' }] //trying to get user view to work
  username: {type: String}
});

const Event = mongoose.model("event", eventchema);

module.exports = Event;
