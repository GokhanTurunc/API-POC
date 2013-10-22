var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),

    util = require('./util'),
    api = require('./api');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

// Get best selling products
//app.get('/api/get-best-selling', function(req, res) {
//    api.getBestSelling(function(data) {
//        res.send(data);
//    });
//});

app.get('/get-forgery-token', function(req, res) {
    api.getForgeryToken(function(data) {
        res.send(data);
    });
});

app.get('/get-homepage-promotions', function(req, res) {
    api.getHomePagePromotions(function(data) {
          res.send(data);
    });
});

//app.get('/api/get-buyer-info', function(req, res) {
//    api.getBuyerInfo(function(data) {
//        res.send(data);
//    });
//});
//
//app.post('/api/login', function(req, res) {
//    api.buyerLogin(function(data) {
//        res.send(data);
//    })
//});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
