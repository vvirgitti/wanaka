'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('styling', __dirname + '/styling');

const hbs = exphbs.create({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: __dirname + '/views',
  partialsDir: __dirname + '/views/partials'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

handlebars.registerPartial('header', '{{header}}');
handlebars.registerPartial('footer', '{{footer}}');

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/day', function(req, res){
  res.render('day');
});

app.get('/venue', function(req, res){
  res.render('venue');
});

app.get('/tips', function(req, res){
  res.render('tips');
});

module.exports = app;
