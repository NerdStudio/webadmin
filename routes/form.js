var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* GET users listing. */
router.get('/form', function(req, res, next) {
  res.render('form', {
    title: 'Form',
=======

var dbconfig = require('../config/mongodb-config');
var web = require('../models/web');
//var mongoose = require('mongoose');


router.get('/', function(req, res, next) {
  res.render('form', {
    title: 'Form get',
>>>>>>> d8d944f683a6c916ab93725f0d0d0296328a79b7
    user: req.user
    });
});

<<<<<<< HEAD
router.post('/addpage', function(req, res) {
  // var webname = req.body.webname;
  // var propietario = req.body.propietario;
  // User.addUser(username, propietario, function(err, user){
  //    console.log(username + " " + password);
      res.render('form', { title: 'Form' });
  // });
=======
router.post('/', function(req, res) {
     var webname = req.body.namepage;
     console.log(webname);
  // var propietario = req.body.propietario;
  // User.addUser(username, propietario, function(err, user){
  //    console.log(username + " " + password);

//  -- abrir conexion a la db
//     guardar informacion
//  -- cerrar conexion
      //dbconfig.conectar;
      dbconfig.conectar();

      var nweb = new web({
        name: webname
      /*  type: 'type',
        category: 'category',
        urloffline: 'urloff',
        owner: 'owner',
        urlonline: 'urlon',
        price: 'price'
*/
      });
      console.log(nweb);
      nweb.save(function (err) {
        if (err) {
          console.log('error: '+err)
        }
        console.log('insercion exitosa');
        res.redirect('/form');
      });
      dbconfig.desconectar();

>>>>>>> d8d944f683a6c916ab93725f0d0d0296328a79b7
});

module.exports = router;
