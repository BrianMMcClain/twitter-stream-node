var fs = require('fs');

var stream = require('../lib/stream.js');

var config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));

stream.public(config.username, config.password, function(tweet) {
	console.log(tweet.text);
});