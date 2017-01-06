'use strict';

const app = require('./app.js');

const port = process.env.PORT || 3000;

app.listen(port);
console.log('App has started');
console.log('App running on: ' + port);
