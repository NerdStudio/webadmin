var express = require('express');
var router = express.Router();



var dbconfig = require('../config/mongodb-config');
var web = require('../models/web');
//var mongoose = require('mongoose');


router.get('/', function(req, res, next) {
  if(req.user){
    res.render('form', {
    title: 'Form get',
    user: req.user
    });
  }
  else{
    res.redirect("/webadmin")
  }
});


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

});

module.exports = router;
