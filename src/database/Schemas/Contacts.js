const { Schema } = require("mongoose");

module.exports = new Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});
