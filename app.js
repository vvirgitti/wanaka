'use strict';

require('babel-register');

import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname});
});

app.get('/day', function(req, res){
  res.sendFile('day.html', {root: __dirname/views});
});

module.exports = app;
