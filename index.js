//importing depedencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//body parser middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set Static Path

app.use(express.static(path.join(__dirname, 'public')));

//rooting

app.get('/',function(req,res){
	res.render('index')
});

app.get('/thomas',function(req,res){
	res.render('thomas',{
		today: new Date,
		test: 'this test has been proven successful'
	});
});

//starting server

app.listen(3000,function(){
	console.log('this be callback, telling you when the server started')
});