const router = require("express").Router();

const {
  homePageGetController, 
  // signupGetController, 
  // signupPostController,

} = require("../controllers/auth.controllers");



/* GET/POST  home page */

router.get('/', homePageGetController);


/* GET/POST signup page */

// router.get('/signup', signupGetController);
// router.post('/signup', signupPostController);
// // router.get("/profile", profileGetController)

module.exports = router;

