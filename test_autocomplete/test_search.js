var searchOps = require('../autocomplete/search.js');

searchOps.find('2',10,function(err,result){
	console.log(result.length);
})
