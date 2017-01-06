var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Routes = require('./routes.js');

var app = express();
var PORT = process.env.PORT || 3000;

//connect to database
mongoose.connect("mongodb://localhost/CrowHelpAppUsers", (err)=>{
	if(err){
		console.log("Error connecting to database", err);
	} else {
		console.log("Yay!! Connected UP for helper!");
	}
})

//middleware
app.use(logger('dev'));
app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//routes
Routes(app);


//listen for open connections
app.listen(PORT, (err)=>{
	if(err){
		console.log("Error Starting Server", err); 
	} else {
		console.log("Server Started", PORT);
	}
});