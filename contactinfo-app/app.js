//require express
var express = require("express");
//bootstrap
var app = express();
//port
var port = 3000;

//parse da body
var bodyParser = require("body-parser");
app.use(bodyParser.json());
//what does the extended do ? 
app.use(bodyParser.urlencoded({ extended: true}));

//create var mongoose
var mongoose = require("mongoose");
//need to know what this does ??? Promise 
mongoose.Promise = global.Promise;
//connects to mongoDB
mongoose.connect("mongodb://localhost:27017/contactinfo-app");
 //scheama set up
 var  contactSchema = new mongoose.Schema({
     firstName: String,
     lastName: String,
     eMail: String,
     address: String,
     phoneNumber: Number,
     created_at: {type: Date, default:Date.now()}
 });
 var contact = mongoose.model("contact", contactSchema);


//req = http require by client
//res = http response
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html"); //send file to express framework
});
app.post("/saveContact", (req, res) =>{
    var myData = new contact(req.body);
    myData.save()
    .then(item =>{
        res.send("name saved");
    })
    
    .catch(err => {
        res.status(400).send("404");
    });
});

app.listen(port, () =>{
    console.log("sever is on port:" + port);
});