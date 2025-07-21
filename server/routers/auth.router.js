const authController = require("../controllers/auth.controller")

const express = require("express");
const router = express.Router();

//POST http://localhost:3000/api/v1/restaurant
router.post("/signup",authController.signUp);

module.exports = router;