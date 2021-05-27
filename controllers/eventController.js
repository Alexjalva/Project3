const db = require("../models");

// Defining methods 
module.exports = {
  findAll: function (req, res) {
    db.Event
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Event
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Event
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  pushToUser: function (req, res) {
    db.User
      .findByIdAndUpdate( req.body.user , { $push: { events: req.body.eventId } })
      .catch(err => res.status(422).json(err));
  },
  getUserEvents: function(req, res) {
    db.User
      .findOne({username: req.params.username})
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  getSavedEvent: function(req, res) {
    db.Event  
      .findOne({id: req.params.eventId})
      .then(event => res.json(event))
      .catch(err => res.status(422).json(err));
  }
};
