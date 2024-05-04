const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
  {
    //id, created_at,updated_at

    title: {
      type: String,
      required: [true, "Please enter title"],
    },

    description: {
      type: String,
      required: [true, "Please enter description"],
    },

    order: {
      type: Number,
      required: false,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;