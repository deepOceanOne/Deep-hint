var http = require('http')
	, fs = require('fs')
	, path = require('path')
	, router = require('./router')
	, parseURL = require('url').parse;

String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};


function _join(arr,len,key){

	var biasconst = 36;
	var forreturn = [];
	if(len<arr.length){
		for(var i=0;i<len;i++){
			forreturn.push(_filter(arr[i].text,key,biasconst));
		}
	}else{
		for(var i=0;i<arr.length;i++){
			forreturn.push(_filter(arr[i].text,key,biasconst));
		}

	}

	return forreturn;
}

function _filter(str,key,bias){
        var index = str.indexOf(key);
        if(index+bias>str.length){
                return str.substring(index+1);
        }else{
                return str.substring(index+1,index+1+bias);
        }
}



var kwupside = require('./search.js');

var urls= [
	['^/qs.b',function(req,res,param){
		 var query = param.query;
		 res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

		 var js = kwupside.find(query.q,query.size,function(db,result){
			var join_const = 9;
			result_output = _join(result,join_const,query.q);
  		 	res.end(JSON.stringify(result_output));
			db.close();
		 });
	}],

	['^/$',function(req,res){

		 res.writeHead(200, {'Content-Type': 'text/html'});

		 fs.readFile('./index.html', function (err, data) {
  				if (err) throw err;
  			 res.end(data);
		 });
	}],

// static js and css file serve 
	['^.*js || ^.*css',function(req,res){
		var param = parseURL(req.url,true);	
		// param.pathname, use "." to patch
		fs.createReadStream("."+param.pathname).pipe(res);
		console.log("get a js or css request");

	}],




]


http.createServer(  router.include(urls) ).listen(8000, '0.0.0.0');
console.log('Server running at http://127.0.0.1:8000/');
