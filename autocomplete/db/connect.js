var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


var searchOps = {


 insert : function(key,size,callback){

// Connection URL 
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

// do insert  operation
  collection.find({text:/.key/i}).toArray(function(err, docs) {
    assert.equal(err, null);
    assert.equal(2, docs.length);
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });

 
});

}


}




module.export = searchOps;


