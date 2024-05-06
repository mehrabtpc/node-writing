const Question= require("../models/Question.model");

const getQuestions = async (req, res) => {
    try {
      const questions = await Question.find({});
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const getQuestion = async (req, res) => {
    try{
      const { id } = req.params;
      const question = await Question.findById(id);
      res.status(200).json(question);
    }catch(error){
      res.status(500).json({ message: error.message });
    }

  }
  const createQuestion = async (req, res) => {
    try {
      const question = await Question.create(req.body);
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    getQuestions,
    getQuestion,
    createQuestion,

};
  