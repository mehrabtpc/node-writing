const express = require("express");
const Question = require("../models/Question.model.js");
const router = express.Router();
const {getQuestions,getQuestion,createQuestion} = require('../controllers/QuestionController.js');


router.get("/", getQuestions);
router.get(":/id", getQuestion)
router.post("/", createQuestion);



module.exports = router;