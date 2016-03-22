"use strict"
require('babel/register');
var express = require('express');
var fs = require('fs');
var request = require('request');
var noodle  = require('noodlejs');
var app     = express();
var Xray = require('x-ray');

app.get('/scrape', function(req, res){
  let url = 'http://www.mfinante.ro/infocodfiscal.html';

  var x = Xray();

  x(url, 'div#main center table tbody tr td', [{  
    name: 'font',
  }])(function(err, result){
      console.log(result)
  });

  //noodle.query({
  //  url:      url,
  //  post: {
  //    "pagina": "domenii",
  //    "cod": "29469707",
  //    "B1": "VIZUALIZARE"
  //  },
  //  selector: 'div#main center table tbody tr td font',
  //  extract:  'text'
  //})
  //.then(function (results) {
  //    console.log(results);
  //});

})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
