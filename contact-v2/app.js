//import { mongo } from "mongoose";

var express = require("express");

var app = express();

var port = 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/contactinfo-app-2");
//view engine
app.set("view engine", "ejs");

var  contactSchema = new mongoose.Schema ({
    firstname: String,
    lastname: String,
    email: String,
    subject: String,
    message: String,
    created_at: {type: Date, default:Date.now()},

});


 var contactV2 = mongoose.model("contact-v2",  contactSchema);


 app.get('/',(req, res) => {
     contactV2.find((err, result) =>
     {
        if(err) return console.log(err)
   
        res.render('index.ejs', {contacts: result})
     })
    
});



app.get("/bootstrap-combined.min.css", (req, res) =>{
    res.sendfile(__dirname + "/bootstrap-combined.min.css")
});



app.post("/inputs", (req, res) =>{
    var myData = new contactV2(req.body);
    myData.save()
    .then(item =>{
        res.send("inputs saved");

    })

    .catch(err => {
        res.status(400).send("404");
    });
});
app.listen(port, () =>{
    console.log("sever is on port:" + port);
});