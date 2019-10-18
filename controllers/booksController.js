const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    return new Promise((resolve, reject) => {
      db.Book
      .find()
      .sort({ date: -1 })
      .then(dbModel => {
        console.log(dbModel)
        resolve(dbModel)
      })
      .catch(err => console.log(err));
    })
    
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(book) {
    db.Book
      .create(book)
      .then(dbModel => {status: 200})
      .catch(err => console.log(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
