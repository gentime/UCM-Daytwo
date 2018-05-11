var express = require('express');
var router = express.Router();
var mongo = require("mongodb").MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get tasktracker page
router.get('/tasks', function(req, res){
res.render('tasks', { title : 'Task Tracker'});
});

//edit page 
router.get('/edit', function(req, res){
  res.render('edit', {title: "edit"});
});

// task list page
router.get('/tasklist', function(req,res){
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{}, function(e,docs){
    res.render('tasklist', {"tasklist": docs});
  });
});

router.get('/addtask', function(req, res){
  res.render('addtask', {title: 'Add New Task'});
});

//delete task page
router.get('/deletetask/:_id', function(req, res){
var db = req.db;
var collection = db.get('usercollection');
collection.remove({'_id': req.params._id}, function(err, task){
    if(err){
      console.log(err);
      if(err.kind === 'ObjectId'){
        return res.status(404).send({message: "task not found" + req.params._id});
      }
      return res.status(500).send({message: "can't delete task with id" + req.parms._id});
    }
      if(!task){
        return res.status(404).send({Message: " task not found" + req.params._id });
      }
      res.redirect('tasklist');
    });
});

//
router.post('/addtask', function(req, res){
//postin' tasks
var db = req.db;

//get form values
var taskName = req.body.taskname;
var taskDesc = req.body.taskdesc;

//set collection
var collection = db.get('usercollection');

//send to DB
collection.insert({
  "task" : taskName,
  "description" : taskDesc,
}, function (err, doc){
  if (err){
    res.send("Error: can't submit to database");
  }
  else{
  res.redirect("/tasklist");

}
});
});

router.get('/tasks/:_id', function(req, res){
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({'_id': req.params._id},{}, function(err, task){
        res.render('edit', {'thistask': task});
    });
  });



//edit task
router.post('/edit/:_id', function(req, res){
  var db = req.db;
  var collection = db.get('usercollection');
  collection.update({'_id': req.params._id}, {$set: {
    "task": req.body.taskname,
    "description": req.body.taskdesc,
  }}, {new: false}, function (err, task){
    if (err) {
      return handleError(err);}
    else{ 
    res.redirect('/tasklist');
    }  
  });
  }); 
  
  //edit task


module.exports = router;
