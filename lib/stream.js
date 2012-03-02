var https = require('https');

exports.public = function(username, password, cb) {
	
	// For now, use basic authentication
	var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
	
	// HTTPS Request to the twitter public stream
	var options = {
	  host: 'stream.twitter.com',
	  port: 443,
	  path: '/1/statuses/sample.json',
	  method: 'GET',
	  auth: username + ":" + password
	};
	
	// Begin streaming
	var buffer = ""
	var req = https.request(options, function(res) {
		res.on('data', function(d) {
			buffer += d;
			if (buffer.indexOf('\n') != -1) {
				// New Tweet
				tmp = buffer.split('\n');
				for (var i = 0; i < tmp.length-1; i++) {
					var tweet = JSON.parse(tmp[i]);
					cb(tweet);
				}
				buffer = tmp[tmp.length - 1];
			}
		});
	});
	
	req.end();
	
	req.on('error', function(e) {
	  console.error(e);
	});
};