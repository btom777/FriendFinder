var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./app/routing/api-routes');
var routes2 = require('./app/routing/html-routes');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


routes(app);
routes2(app);

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/app/public/home.html'));
});

app.get('/survey', function (req, res) {
	res.sendFile(path.join(__dirname, '/app/public/survey.html'));
});

var server = app.listen(8000, function() {
  console.log('Server listening on port ' + server.address().port);
});