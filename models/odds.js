const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OddsSchema = new Schema({
  event: { type: String, required: true },
  odds: {type: Boolean, default: false },
});

const Odds = mongoose.model("Odds", OddsSchema);

module.exports = Odds;