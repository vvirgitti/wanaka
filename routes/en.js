'use strict';

const enRouter = require('express').Router();

enRouter.get('/day', function(req, res){
  res.render('day-en');
});

enRouter.get('/location', function(req, res){
  res.render('location-en');
});

enRouter.get('/tips', function(req, res){
  res.render('tips-en');
});

module.exports = enRouter;
