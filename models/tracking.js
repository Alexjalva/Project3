const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Personal Tracking
const trackingSchema = new Schema({
  title: { type: String, required: true },
  event: { type: String, required: true },
  odds: { type: String, required: true },
  // username : [{type: Schema.Types.ObjectId, ref: 'Users' }] //trying to get user view to work
  username: {type: String}
});

const Recipe = mongoose.model("Tracking", recipeSchema);

module.exports = Tracking;