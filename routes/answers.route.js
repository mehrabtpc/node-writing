const express = require("express");
const Answer = require("../models/Answer.model.js");
const router = express.Router();

const {createAnswer,updateAnswer,deleteAnswer} = require('../controllers/AnswerController.js')

router.post("/", createAnswer);
router.put("/:id", updateAnswer);
router.delete("/:id", deleteAnswer);

module.exports = router;