
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

	var webSchema = new Schema({
		name: String
		/*type: String,
		category: String,
		urloffline: String,
		owner: String,
		urlonline: String,
		price: Number,
		timessold: Number
		*/
	}/*,{collection: 'pages'}*/);

module.exports = mongoose.model('web', webSchema);



/*
module.exports = function(mongoose){
	var Schema = mongoose.Schema;

	var webSchema = new Schema({
		name: String,
		type: String,
		category: String,
		urloffline: String,
		owner: String,
		urlonline: String,
		price: Number,
		timessold: Number
	},{collection: 'pages'});

	return mongoose.model('web', webSchema);
}
*/
//var exports = module.exports = {};

/*
exports.addweb = function(webname, type, category, urloff, owner, urlon, price){
	var web = new web({
		name: webname,
		type: type,
		category: category,
		urloffline: urloff,
		owner: owner,
		urlonline: urlon,
		price: price
	});
	web.save(function (err) {
		if (err) return console.error(err);
  		console.log('insercion exitosa');
	});
	
}
*/
//webSchema.methods.add = function(webname, type, category, urloff, owner, urlon, price){

/*
function addWeb(webname, type, category, urloff, owner, urlon, price){
	var web = new Web({
		name: webname,
		type: type,
		category: category,
		urloffline: urloff,
		owner: owner,
		urlonline: urlon,
		price: price
	})
	web.save(function (err, fluffy) {
		if (err) return console.error(err);
  		console.log('insercion exitosa');
	});
	
}
*/