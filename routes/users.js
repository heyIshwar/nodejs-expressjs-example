var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User'); 


mongoose.connect('MONGODB_URI_STRING', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection
db.once('open', function callback() {
  console.log("Connected to MLab")
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.post('/performLogin', (req, res, next) => {
  let data = req.body;
  console.log(data)
  
  User.create({
    email: data.email,
    password: data.password
  }).then((result, err) => {
    if (err) {
      console.log("Something is wrong !")
      res.send("Something is wrong")
    } else {
      res.send("User saved to database");
    }
  })
 
})

module.exports = router;
