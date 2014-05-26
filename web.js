var gzippo = require('gzippo');
var express = require('express');
var morgan  = require('morgan');
var app = express();
 
app.use(morgan({ format: 'dev', immediate: true }));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);