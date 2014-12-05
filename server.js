var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

app.use(bodyParser());
app.use(methodOverride());
app.use(function(err, req, res, next){
  // logic
});

mongoose.connect('mongodb://Adr1:RT4qrYzLVogtUL4qxZFLogZfW4gfdQSL@ds055980.mongolab.com:55980/staging');

app.get('/', function (req, res) {
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('listening at http://%s:%s', host, port)
})
