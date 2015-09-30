var controller = require('./../server/controllers/controller.js');

module.exports = function(app){
	app.get('/users',function(req,res){
		controller.show(req,res);
	});
	app.post('/users',function(req,res){
		controller.add(req,res);
	});
};