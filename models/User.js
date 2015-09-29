var db = require('../lib/db');

// var UserSchema = new db.Schema({
//     username : {type: String, unique: true},
//     password : String
//
// })
//
// var MyUser = db.mongoose.model('User', UserSchema);

//module.exports.addUser = addUser;

// function addUser(username, password, callback) {
//     var instance = new MyUser();
//     instance.username = username;
//     instance.password = password;
//     instance.save(function(err) {
//         if (err) {
//             callback(err);
//         }
//         else {
//             callback(null, instance);
//         }
//     })
// }


//PASSPORT TUTO
// Campos que vamos a guardar en la base de datos
var UserSchema = new db.Schema({
	name				: String, // Nombre del usuario
	//provider		: String, // Cuenta del usuario (Twitter o Facebook en este ejemplo)
	provider_id : {type: String, unique: true}, // ID que proporciona Twitter o Facebook
	photo			 : String, // Avatar o foto del usuario
	createdAt	 : {type: Date, default: Date.now} // Fecha de creación
});

// Exportamos el modelo 'User' para usarlo en otras
// partes de la aplicación
var User = db.mongoose.model('User', UserSchema);
