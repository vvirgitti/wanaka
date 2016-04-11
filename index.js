'use strict';

require('babel-register');

import app from './app.js';

const port = process.env.PORT || 3000;

app.listen(port);
console.log('App has started');
console.log('App running on: ' + port);
