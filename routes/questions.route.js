const express = require("express");
const Question = require("../models/Question.model.js");
const router = express.Router();
const {getQuestions,getQuestion,createQuestion,updateQuestion,deleteQuestion} = require('../controllers/QuestionController.js');


router.get("/", getQuestions);
router.get("/:id", getQuestion)
router.post("/", createQuestion);
router.put("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);



module.exports = router;