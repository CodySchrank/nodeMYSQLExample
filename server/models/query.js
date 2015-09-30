module.exports = (function(){
	return {
		insert: function(req,data,table,callback){
			req.getConnection(function(err,connection){
				connection.query('INSERT INTO ' + table + ' SET ?',data,function(err,rows){
					callback(err,rows);
				});
			});
		},
		find: function(req,table,callback){
			req.getConnection(function(err,connection){
				connection.query('SELECT * FROM ' + table,function(err,rows){
					callback(err,rows);
				});
			});
		}
	};
})();