var express = require('express');
var router = express.Router();

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

//Rutas para Social Login ---->

//ruta para desloguear
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// Ruta para autenticarse con Twitter (enlace de login)
router.get('/auth/twitter', passport.authenticate('twitter'));
// Ruta para autenticarse con Facebook (enlace de login)
router.get('/auth/facebook', passport.authenticate('facebook'));
// Ruta de callback, a la que redirigirá tras autenticarse con Twitter.
router.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

// En caso de fallo redirige a otra vista '/login'
router.get('/auth/twitter/callback', passport.authenticate('twitter',
  { successRedirect: '/', failureRedirect: '/login' }
));
// Ruta de callback, a la que redirigirá tras autenticarse con Facebook.
// En caso de fallo redirige a otra vista '/login'
router.get('/auth/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/index', failureRedirect: '/login' }
));
router.get('/auth/github/callback', passport.authenticate('github',
  { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/index');
  }
  );

module.exports = router;
