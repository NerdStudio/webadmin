var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
	res.render('session',{
		title: 'Index',
		user: req.user
	});
});



module.exports = router;