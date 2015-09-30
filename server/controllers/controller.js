var Query = require('./../models/query.js');

module.exports = (function(){
	return {
		show: function(req,res) {
			req.getConnection(function(err,connection){
				connection.query('SELECT * FROM users',function(err,rows){
					res.json(rows);
				});
			});
		},
		add: function(req,res){
			var newUser = {
				name: req.body.name
			};

			var table = "users";

			Query.insert(req,newUser,table,function(err,results){
				if(err) return res.json(err);

				Query.find(req,table,function(err,results){
					if(err) return res.json(err);

					res.json(results);
				});
			});
		}
	};
})();