const { Router } = require("express");
const router = new Router();

// const bcryptjs = require("bcryptjs");
// const saltRounds = 10;

// const User = require("../models/User.model");

const {

signupGetController,
signupPostController,
loginGetController,
loginPostController,
profileGetController

} = require("../controllers/auth.controllers");

// GET route ==> to display the signup form to users
router.get("/signup", signupGetController);

// POST route ==> to process form data
router.post("/signup", signupPostController);

router.get("/login", loginGetController);

router.post("/login", loginPostController)

router.get("/profile", profileGetController );

module.exports = router;