var csv = require("fast-csv");
var User = require("../models/users");
var fs = require('fs')

exports.post = function (req, res) {

  if (!req.files) return res.status(400).send("No files were uploaded.");
  var csvFile = req.files.file; // TRYING FOR REACT 

  console.log("CSVFILE", csvFile)
  var users = [];

  // csv.parseString(csvFile.data.toString() // WORKING FOR EXPRESS JS

  csv.parseString(csvFile.data.toString(), {
    headers: true,
    ignoreEmpty: true
  })
    .on("data", function (data) {
      users.push(data);
    })
    .on("end", function () {
      User.create(users, function (err, documents) {
        if (err) throw err;
      });

      res.send(users.length + " users have been successfully uploaded.");
    });
};
