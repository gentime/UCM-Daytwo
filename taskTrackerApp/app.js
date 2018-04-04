var createError = require('http-errors');
var express = require('express');
var path = require('path');
<<<<<<< HEAD
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/tasktracker');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
=======
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var mongoDb = require('mongodb')
var monk = require('monk')
var db = monk('localhost:27017/tasks')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');(

indexRouter.get(/'taskslist' function(req, res){
 db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('tasklist', { "userlist": docs}
  });
  });
});
>>>>>>> 18390f2a32292cb899b497b88db455fff8b1711d

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

<<<<<<< HEAD
//app.use(favicon(__dirname + '/public/favicon.ico'));
=======
/*connect to db */
app.use(function (req,res,next){
  req.db = db;
  next();
});


>>>>>>> 18390f2a32292cb899b497b88db455fff8b1711d
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
//db stuff
app.use(function(req,res,next){
  req.db = db;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
=======
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

>>>>>>> 18390f2a32292cb899b497b88db455fff8b1711d

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
