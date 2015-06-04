//bring in the express module
var express = require("express"); 

//call the express function, return an object
var app = express(); //the result of calling our express function 

//get route 
//where my application starts when I start the server 

app.set("view engine", "ejs");  //mkdir views 

//"/" means //localhost:3000/ 

app.get("/", function (req, res){
	var name = "Elie"; 
	res.render("index", {personName:name}); //this will render a view and not just just send back text (which is what send did)
});

app.get('/person/:name', function(req, res){ //:name means something, you can put anything here
	var person = req.params.name; //this will refer to the url params, this "name" refers to ":name"
	console.log(req.params.name);
	res.render("person", {specificPerson:person}); //this third person refers the 
})

// app.get("/add/:num1/:num2", function (req, res){
// 	var sum = req.params.num1 + req.params.num2; 
// 	res.render("math", {number:sum}); //this will render a view and not just just send back text (which is what send did)
// });

// app.get("/sub/:num1/:num2", function (req, res){
// 	var subtract = req.params.num1 - req.params.num2; 
// 	res.render("math", {number:subtract}); 
// });

// app.get("/div/:num1/:num2", function (req, res){
// 	var divide = (req.params.num1)/(req.params.num2); 
// 	res.render("math", {number:divide});
// });

//refactor above-listed get requests to one path 
app.get("/:whatever/:num1/:num2", function (req, res){
	var whatever = req.params.whatever;
	if(whatever === "add") {
		var sum = parseInt(req.params.num1) + parseInt(req.params.num2); 
		res.render("math", {number:sum}); 
	}
	else if (whatever === "sub") {
		var subtract = req.params.num1 - req.params.num2; 
		res.render("math", {number:subtract});
	}
	else if (whatever === "div") {
		var divide = (req.params.num1)/(req.params.num2); 
		res.render("math", {number:divide});
	}
});


app.listen(3000,function(){
	console.log("server starting on port 3000");
})

//npm install -g nodemon