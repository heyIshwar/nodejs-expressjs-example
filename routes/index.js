var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/form', function (req, res, next) {
  res.render('form');
});

router.get('/covid', function (req, res, next) {
  request('https://api.covid19api.com/summary', { json: true }, (err, res2, body) => {
    if (err) { return console.log(err); }
    res.render('covid', body);
  });
});

router.post('/api/searchCountry', function(req, res, next) {
  let country = req.body.countryName;
  request(`https://api.covid19api.com/country/${country}`, { json: true }, (err, res2, body) => {
    if (err) { return console.log(err); }
    res.json(body)
  });
})

router.post('/postman', function (req, res, next) {
  let email = req.body.email
  let password = req.body.password
  let isAuthenticated = false

  if (email == "ishwar@some1.in" && password == "pass123") {
    isAuthenticated = true;
  }

  console.log({ email, password })
  res.render('postman', {
    recEmail: email,
    recPassword: password,
    isAuth: isAuthenticated
  });
});

module.exports = router;
