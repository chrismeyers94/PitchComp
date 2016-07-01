//var newrelic = require('newrelic');
var dotenv = require('dotenv').config({silent: true})
var logfmt = require('logfmt');

var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes');
app.get('/', routes.index);
app.get('/submit', routes.submit);

app.get('/send', routes.sendmail);

app.get('*', function(req, res){
	res.send('The page you\'re looking for does not exist.');
});

app.set('port', (process.env.PORT || 3020));

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
