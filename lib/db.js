var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

var dbuser = "dani";
var dbpassword = "123";
var dbaddress = "@ds041871.mongolab.com:41871/labase";

connect();

function connect(){
    var url = 'mongodb://' + dbuser + ':' + dbpassword + dbaddress;
    mongoose.connect(url);
}

function disconnect() {mongoose.disconnect() }
