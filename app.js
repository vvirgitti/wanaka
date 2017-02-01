'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const path = require('path')

const enRouter = require('./routes/en');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname + '/views'));
app.set('styling', path.join(__dirname + '/styling'));

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

app.use('/en', enRouter);

app.get('/', function(req, res){
  res.render('index-en');
});

app.get('/en', function(req, res){
  res.render('index-en');
});

app.get('/fr', function(req, res){
  res.render('index-fr');
});

module.exports = app;
