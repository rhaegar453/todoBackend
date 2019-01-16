var mongoose = require("mongoose");
var passport = require("passport");

var settings = require("../config/settings");
var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var respond = require("../config/respond");
var User = require("../models/User");

router.post("/register", (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.json(respond(false, "Please pass the username and password"));
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      city: req.body.city
    });

    newUser
      .save()
      .then(data => {
        return res
          .status(200)
          .json(respond(true, "Successfully registered! Welcome aboard"));
      })
      .catch(err => {
        if (err.code == 11000) {
          return res.status(400).json({ message: "User already exists" });
        } else {
          return res.status(400).json({ message: "Something went wrong" });
        }
      });
  }
});

router.post("/login", function(req, res) {
  User.findOne(
    {
      email: req.body.email
    },
    function(err, user) {
      if (err) throw err;

      if (!user) {
        res
          .status(401)
          .send({ message: "Authentication Failed. User does not exists" });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            token= "JWT " + token; 
            res.status(200).json({token:token});
          } else {
            res
              .status(401)
              .send({ message: "Authentication failed. Wrong password." });
          }
        });
      }
    }
  );
});

var getToken = headers => {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  }
};

function getDetails(token) {
  var value = jwt.verify(token, settings.secret);
  return {
    email: value.email,
    username: value.username,
    id: value._id
  };
}

router.get('/userDetails', (req, res)=>{
  var token=getToken(req.headers);
  var details=getDetails(token);
  if(token){
    return res.status(200).json(details);
  }
  else{
    return res.status(400).json({err:"ERROR OCCURRED"});
  }
});

module.exports = router;
