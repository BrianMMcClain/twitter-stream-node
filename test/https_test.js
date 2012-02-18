var fs = require('fs');
var http = require('http');

console.log("#VMwarePEX");

// Load config info
var config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));
var auth = 'Basic ' + new Buffer(config.username + ':' + config.password).toString('base64');

var https = require('https');

var options = {
  host: 'stream.twitter.com',
  port: 443,
  path: '/1/statuses/sample.json',
  method: 'GET',
  auth: config.username + ":" + config.password
};

var buffer = ""

var req = https.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', function(d) {
    buffer += d;
	if (buffer.indexOf('\n') != -1) {
		// New Tweet
		tmp = buffer.split('\n');
		for (var i = 0; i < tmp.length-1; i++) {
			var tweet = JSON.parse(tmp[i]);
			if (tweet.user) {
				console.log(tweet.text);
			}
		}
		buffer = tmp[tmp.length - 1];
	}
  });
});
req.end();

req.on('error', function(e) {
  console.error(e);
});