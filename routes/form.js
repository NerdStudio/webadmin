var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('form', {
    title: 'Form get',
    //user: req.user
    });
});

router.post('/', function(req, res) {
  // var webname = req.body.webname;
  // var propietario = req.body.propietario;
  // User.addUser(username, propietario, function(err, user){
  //    console.log(username + " " + password);
      res.render('form', { title: 'Form post' });
  // });
});

module.exports = router;
