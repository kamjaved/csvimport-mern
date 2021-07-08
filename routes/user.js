var express = require("express");
var User = require("../models/users");
var router = express.Router();

/* GET users. */
router.get("/", function (req, res, next) {
  User.find()
    .limit(200)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
});

module.exports = router;
