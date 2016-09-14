var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var searchOps = {

	find : function(key,size,callback){
		var url = 'mongodb://localhost:27017/test';
		// Use connect method to connect to the Server
		MongoClient.connect(url, function(err, db) {
		  assert.equal(null, err);
		  console.log("Connected correctly to server");

     		  var collection = db.collection('hint');
		  var regexp = '.'+key+'.';
	          collection.find({text: {$regex:regexp} }).toArray(function(err, docs) {
			console.log(docs);
			var docs_output = docs.sort(function(a,b){return Math.random()>.5?-1:1;})
			callback(db,docs_output);
		
       	          });


	    	});					


	},


}


module.exports = searchOps;
