var express = require('express');
var router = express.Router();

//var mongoose = require('mongoose');
//var db = require('./lib/db');

var db = require('../config/mongodb-config');


router.get('/', function(req, res, next){
	if(req.user){

		res.render('session',{
			title: 'Index',
			user: req.user
			});
	}else{
		res.redirect('/webadmin')
	}
});



module.exports = router;