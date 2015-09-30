/** Dependencies **/
var express = require('express');
var bodyParser = require('body-parser');

/** Setup **/
var app = express();
app.use(express.static(__dirname + "/client"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/** Requires **/
require('./config/sql.js')(app);
require('./config/routes.js')(app);

/** Port **/
app.listen(8000,function(){
	console.log("Listening on Port 8000");
});
