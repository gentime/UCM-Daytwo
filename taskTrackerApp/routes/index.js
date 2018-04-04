var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*task traker page */
router.get('/tasks', function(req, res){
  res.render('tasks', { title: ' task tracker' });
});


//task list page//
router.get('/tasklist', function(req, res){
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{}, function(e,docs){
    res.render('taskslist', { "tasklist": docs});
  });
});

module.exports = router;
