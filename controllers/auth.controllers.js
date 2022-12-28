const User = require('../models/User.model');
const bcryptjs = require('bcryptjs'); 

// HOME PAGE
const homePageGetController = (req, res, next) => {
    res.render('index');
    return
}



//SIGNUP PAGE
const signupGetController = (req, res, next) => {
    res.render('signup');
}

const signupPostController = (req, res, next) => {
    console.log(req.body);
  
    if(!req.body.username || ! req.body.password){
      res.send('All fields required');
      return;
    }
  
    User.findOne({ username: req.body.username })
      .then(foundUser => {
        
        if(foundUser){
          res.send('Sorry user already exists');
          return;
        }
  
        const myHashedPassword = bcryptjs.hashSync(req.body.password)
  
        return User.create({
          username: req.body.username,
          password: myHashedPassword
        })
        
      })
      .then(createdUser => {
        console.log("here's the new user", createdUser);
        res.redirect("/login");
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      })
  };


  // login page

  const loginGetController = (req, res, next) => {
    res.render('login');
  };

const loginPostController = (req, res, next) => {
    console.log (req.body);

    const {username, password} = req.body;

    if(! username || ! password) {
        res.render ("login", { errorMessage: "sorry you forgot email or password"});
        return;
    }

    User.findOne ({ username: username})
        .then(foundUser => { 
            if(!foundUser) {
                // res.send("Sorry user does not exist");
                res.render ("login", { errorMessage: "sorry user does not exist"})
                return
            }
        const isValidPassword = bcryptjs.compareSync(password, foundUser.password);

            if (!isValidPassword) {
                // res.send("sorry wrong password");
                res.render ("login", { errorMessage: "sorry wrong password"})
                return;
            }
            req.session.user = foundUser;
          
            res.redirect("/profile")
        })
        .catch (err => {
            console.log(err);
            res.send(err);
        })
  };

  const profileGetController = (req, res, next) => {
    res.render("/users/users-profile")

  }


  module.exports = {
    homePageGetController,
    signupGetController,
    signupPostController,
    loginGetController,
    loginPostController,
    profileGetController

  } 