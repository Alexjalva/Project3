const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// Matches with "/api/events"
router.route("/")
  .get(eventController.findAll)
  .post(eventController.create);


module.exports = router;
