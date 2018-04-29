const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const session = require('express-session');

const index = require('./routes/index');
const tele = require('./routes/tele');

const app = express();
var server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret: "hello", resave: false, saveUninitialized: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist')); // redirect Popper JS
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js')); // redirect tether bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


app.use('/', index);
app.use('/tele', tele);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(8888, function(){
  console.log('listening on *:8888');
});

module.exports = app;