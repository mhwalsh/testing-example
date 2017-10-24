var express = require('express');
var app = express();
var converter = require('./converter.js');

app.get('/hexToRgb', function(req, res) {
  var hex = req.query.hex;

  var rgb = converter.hexToRgb(hex);

  res.send(JSON.stringify(rgb));
});

app.listen(3000);
