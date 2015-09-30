var db = require('../lib/db');



//PASSPORT TUTO
// Campos que vamos a guardar en la base de datos
var UserSchema = new db.Schema({
	name				: String, // Nombre del usuario
	//provider		: String, // Cuenta del usuario (Twitter o Facebook en este ejemplo)
	provider_id : {type: String}, // ID que proporciona Twitter o Facebook
	photo			 : String, // Avatar o foto del usuario
	createdAt	 : {type: Date, default: Date.now} // Fecha de creación
});

// Exportamos el modelo 'User' para usarlo en otras
// partes de la aplicación
var User = db.mongoose.model('User', UserSchema);
