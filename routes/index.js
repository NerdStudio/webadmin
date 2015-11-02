var express = require('express');
var router = express.Router();

<<<<<<< HEAD
var userschema = require('../models/User')
var db = require('../lib/db');
var User = db.mongoose.model('User', userschema);

var passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });

});
router.get('/index', function(req, res, next) {
  res.render('index', {
        title: 'Index',
        user: req.user
      });
      //console.log(req)
});


//-------- Rutas para FORM - formulario que agrega páginas al catalogo
router.get('/form', function(req, res, next) {
  res.render('form', {
    title: 'Form',
    user: req.user
    });
});

router.post('/form', function(req, res) {
  // var webname = req.body.webname;
  // var propietario = req.body.propietario;
  // User.addUser(username, propietario, function(err, user){
  //    console.log(username + " " + password);
      res.render('form', {
        title: 'Form',
        user: req.user
        });
  // });
});


// ---- Rutas para Pages Stored
router.get('/stored', function(req, res, next) {
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

// --- Ruta para Usuarios Administradores
router.get('/admin-users', function(req, res, next) {
  User.find({}, function(err, docs){
    if(err) throw(err)
    else{
      res.render('admin-users', {
        title: 'Stored',
        user: req.user,
        users: docs
      });
    }
  })
});

//Rutas para Social Login ---->

//ruta para desloguear
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

=======
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


>>>>>>> d8d944f683a6c916ab93725f0d0d0296328a79b7
// Ruta para autenticarse con Twitter (enlace de login)
router.get('/auth/twitter', passport.authenticate('twitter'));
// Ruta para autenticarse con Facebook (enlace de login)
router.get('/auth/facebook', passport.authenticate('facebook'));
// Ruta de callback, a la que redirigirá tras autenticarse con Twitter.
router.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

// En caso de fallo redirige a otra vista '/login'
router.get('/auth/twitter/callback', passport.authenticate('twitter',
<<<<<<< HEAD
  { successRedirect: '/', failureRedirect: '/login' }
=======
  { successRedirect: '/session', failureRedirect: '/webadmin' }
>>>>>>> d8d944f683a6c916ab93725f0d0d0296328a79b7
));
// Ruta de callback, a la que redirigirá tras autenticarse con Facebook.
// En caso de fallo redirige a otra vista '/login'
router.get('/auth/facebook/callback', passport.authenticate('facebook',
<<<<<<< HEAD
  { successRedirect: '/index', failureRedirect: '/login' }
));
router.get('/auth/github/callback', passport.authenticate('github',
  { failureRedirect: '/login' }),
=======
  { successRedirect: '/session', failureRedirect: '/webadmin' }
));
router.get('/auth/github/callback', passport.authenticate('github',
  { successRedirect: '/session', failureRedirect: '/webadmin' }
));/*,
>>>>>>> d8d944f683a6c916ab93725f0d0d0296328a79b7
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/index');
  }
<<<<<<< HEAD
  );

=======
);
*/
>>>>>>> d8d944f683a6c916ab93725f0d0d0296328a79b7
module.exports = router;
