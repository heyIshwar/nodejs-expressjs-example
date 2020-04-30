var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/form', function (req, res, next) {
  res.render('form');
});

router.post('/postman', function (req, res, next) {
  let email = req.body.email
  let password = req.body.password
  let isAuthenticated = false

  if (email == "ishwar@some1.in" && password == "pass123") {
    isAuthenticated = true;
  }

  console.log({email, password})
  res.render('postman', {
    recEmail: email,
    recPassword: password,
    isAuth: isAuthenticated
  });
});

module.exports = router;
