var fs = require('fs');

var stream = require('../lib/stream.js');

var config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));

stream.public_limit(config.username, config.password, 3, function(tweet) {
	console.log(tweet.text);
});