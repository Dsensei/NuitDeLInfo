var express = require('express');
var route_search = require('./routes/search');
var path = require('path');

var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();

mongoose.connect('mongodb://Adr1:RT4qrYzLVogtUL4qxZFLogZfW4gfdQSL@ds055980.mongolab.com:55980/staging');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { res.redirect('/search'); }
    res.render('home', { title: 'BorderlessFamily', user: req.user });
});

app.get('/search', ensureAuthenticated, route_search.search);

app.get('/register', function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { res.redirect('/search'); }
    res.render('register', { title: 'BorderlessFamily', user: req.user });
});

app.get('/logout', function(req, res) {
	req.logout();
  	res.redirect('/');
});

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  	app.use(errorHandler());
}

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
}

app.listen(app.get('port'), function(){
  	console.log('Express server listening on port ' + app.get('port'));
});
