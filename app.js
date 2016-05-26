'use strict';

require('babel-register');

import express from 'express';
import bodyParser from 'body-parser';
import handlebars from 'handlebars';
import exphbs from 'express-handlebars';

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

module.exports = app;
