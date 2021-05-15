const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Favorite Recipes
const faveSchema = new Schema({
  title: { type: String, required: true },
  href: { type: String, required: true },
  event: { type: String, required: true },
  thumbnail: { type: String },
  selected: {type: Boolean, default: false },
  // username : [{type: Schema.Types.ObjectId, ref: 'Users' }] //trying to get user view to work
  username: {type: String}
});

const Faves = mongoose.model("event", faveSchema);

module.exports = Faves;
