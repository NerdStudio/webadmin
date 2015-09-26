var express = require('express');
var router = express.Router();
var User = require('../models/User.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/daniel', function(req, res, next) {
  res.render('daniel', { title: 'Daniel' });
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Form' });
});

router.post('/signup', function(req, res) {
  var webname = req.body.webname;
  var propietario = req.body.propietario;
  User.addUser(username, propietario, function(err, user){
      console.log(username + " " + password);
      res.render('form', { title: 'Form' });
  });
});

module.exports = router;
