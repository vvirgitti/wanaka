'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const path = require('path')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('img', path.join(__dirname + '/img'));
app.set('css', path.join(__dirname + '/css'));

const hbs = exphbs.create({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: __dirname + '/img'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.render('index');
});

module.exports = app;
