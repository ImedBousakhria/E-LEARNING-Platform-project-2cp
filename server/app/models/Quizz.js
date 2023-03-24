const mongoose = require("mongoose");

const quizzSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }, {timestamps: true});
  
const Quizz = mongoose.model("Quizz", quizzSchema);

module.exports = Quizz;