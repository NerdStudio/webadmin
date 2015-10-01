var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/form', function(req, res, next) {
  res.render('form', {
    title: 'Form',
    user: req.user
    });
});

router.post('/addpage', function(req, res) {
  // var webname = req.body.webname;
  // var propietario = req.body.propietario;
  // User.addUser(username, propietario, function(err, user){
  //    console.log(username + " " + password);
      res.render('form', { title: 'Form' });
  // });
});

module.exports = router;
