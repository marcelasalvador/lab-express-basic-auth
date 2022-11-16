const {
  homePageGetController, 
  homePagePostController,
  signupGetController, 
  signupPostController 
} = require("../controllers/auth.controllers");

const router = require("express").Router();

/* GET/POST  home page */

router.get('/index', homePageGetController);
router.post('/index', homePagePostController);

/* GET/POST signup page */

router.get('/signup', signupGetController);
router.post('/signup', signupPostController);

module.exports = router;

