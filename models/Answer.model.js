const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const AnswerSchema = mongoose.Schema(
  {
    body: {
      type: String,
      required: [true, "Please enter Body"],
    },

    question_id: {
      type: Number,
      required: [true, "Please enter question_id"],
    },

    published_at: {
      type: Timestamp,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;