const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }, {timestamps: true});
  
const User = mongoose.model("User", userSchema);

module.exports = User;