var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
<<<<<<< HEAD

var passport = require('passport'); //PASSPORT


var routes = require('./routes/index');
var form  = require('./routes/form');

require('./passport')(passport);

=======
var passport = require('passport');


var routes = require('./routes/index');
var webadmin = require('./routes/webadmin');
var sesion = require('./routes/session');
var form = require('./routes/form');
var stored = require('./routes/stored');
var admins = require('./routes/admin-users');

//var users = require('./routes/users');

require('./passport')(passport);

//var config = require('./config/mongodb-config');
>>>>>>> d8d944f683a6c916ab93725f0d0d0296328a79b7
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
<<<<<<< HEAD
//app.use(favicon(__dirname + '/public/favicon.ico'));
=======
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
>>>>>>> d8d944f683a6c916ab93725f0d0d0296328a79b7
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));

=======
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


>>>>>>> d8d944f683a6c916ab93725f0d0d0296328a79b7
// Indicamos que use sesiones, para almacenar el objeto usuario
// y que lo recuerde aunque abandonemos la página
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'lollllo' }));

//Inicializa PASSPORT
app.use(passport.initialize());
app.use(passport.session());

<<<<<<< HEAD
//Enrutador

app.use('/form', form);
app.use('/', routes);
//app.use('/form', form);
//app.use('/daniel', routes);
//app.use('/users', users);

=======

app.use('/', routes);
app.use('/webadmin', webadmin);
app.use('/session', sesion);
app.use('/form', form);
app.use('/stored', stored);
app.use('/admin-users', admins);

//app.use('/users', users);

//app.use(config);
>>>>>>> d8d944f683a6c916ab93725f0d0d0296328a79b7
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


<<<<<<< HEAD

=======
>>>>>>> d8d944f683a6c916ab93725f0d0d0296328a79b7
module.exports = app;
