'use strict';

require('babel-register');

import express from 'express';
import path from 'path';
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

module.exports = app;
