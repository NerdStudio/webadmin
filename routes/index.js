var express = require('express');
var router = express.Router();

var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('webadmin');
});

router.get('/logout', function(req, res, next) {
	//req.user = {}
  req.logout();
	res.redirect('/webadmin');
});


// Ruta para autenticarse con Twitter (enlace de login)
router.get('/auth/twitter', passport.authenticate('twitter'));
// Ruta para autenticarse con Facebook (enlace de login)
router.get('/auth/facebook', passport.authenticate('facebook'));
// Ruta de callback, a la que redirigirá tras autenticarse con Twitter.
router.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

// En caso de fallo redirige a otra vista '/login'
router.get('/auth/twitter/callback', passport.authenticate('twitter',

  { successRedirect: '/session', failureRedirect: '/webadmin' }

));
// Ruta de callback, a la que redirigirá tras autenticarse con Facebook.
// En caso de fallo redirige a otra vista '/login'
router.get('/auth/facebook/callback', passport.authenticate('facebook',

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

module.exports = router;
