var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: { type: String },
  city: { type: String },
  state: { type: String },
  work_profile: { type: String },
});

var User = mongoose.model("User", userSchema);

module.exports = User;
