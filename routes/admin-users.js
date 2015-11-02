var express = require('express');
var router = express.Router();

var db = require('../config/mongodb-config'),
	User = require('../models/user');

router.get('/', function(req, res, next) {
	//db.conectar();
	console.log(req.user);

  	User.find({}, function(err, docs){
    	if(err) throw(err)
    	else{
      		res.render('admin-users', {
        		title: 'Stored',
        		user: req.user,
        		users: docs
      		});
    	}
    	
  	});


});

module.exports = router;