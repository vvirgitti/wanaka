'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// const enRouter = require('./routes/en');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/assets'));

// app.use('/en', enRouter);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

// app.get('/en', function(req, res){
//   res.render('index-en');
// });
//
// app.get('/fr', function(req, res){
//   res.render('index-fr');
// });

module.exports = app;
