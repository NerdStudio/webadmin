
var mongoose = require('mongoose');
var user = '';
var password = '';
var dbaddress = '';
//var dblocal = '';
var database = 'develop';

//var url = 'mongodb://'+user+':'+password+'@'+dbaddress+database;
var localurl = 'mongodb://localhost:27017/'+database;


var exports = module.exports = {};
exports.conectar = function (){
	mongoose.connect('mongodb://localhost/develop');
	
}
exports.desconectar = function(){
	mongoose.disconnect();
}

/*
var db = ({
	mongoose: 	mongoose,
	//models
	page:    //require('../models/web')(mongoose),
			function(){
				var model = require('../models/web');
				return model(mongoose);
			}

});
module.exports.db = db;
*/
/*
 if(!global.hasOwnProperty('db')){
 	var mongoose = require('mongoose');
 	var database = '';
 	//mongoose.connect('mongodb://localhost'+database);

 	global.db = {
 		mongoose: mongoose,

 		//models
 	//	web: require('../models/web.js')//(mongoose)
 	};
 }

 module.exports = global.db;
 */