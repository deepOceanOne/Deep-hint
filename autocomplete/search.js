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
        //		callback(db,docs);
			callback(db,docs);
		
       	          });


	    	});					


	},


}


module.exports = searchOps;
