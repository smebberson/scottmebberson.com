
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , util = require('util')
  , wintersmith = require('./middleware/wintersmith');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.use(wintersmith());
app.set('views', path.resolve(__dirname,'../','templates'));
app.set('view engine', 'jade');
// app.use(express.favicon());
app.use(express.logger('dev'));
// app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.resolve(__dirname, '../', 'build')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/lifestreaming', routes.lifestreaming);
app.get('/postindex', routes.postindex);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
