var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  User.find({}, function(err, docs){
    if(err) throw(err)
    else{
      res.render('stored', {
        title: 'Stored',
        user: req.user,
        users: docs
      });
    }
  })
});

module.exports = router;