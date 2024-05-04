const express = require("express");
const Question = require("../models/Question.model.js");
const router = express.Router();
const {getQuestions} = require('../controllers/QuestionController.js');


router.get('/', getQuestions);




module.exports = router;