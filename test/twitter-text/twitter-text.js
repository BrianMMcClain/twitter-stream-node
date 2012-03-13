var twitter = require('twitter-text');
var fs = require('fs');

var stream = require('../../lib/stream.js');

var config = JSON.parse(fs.readFileSync("../config.json", "utf-8"));

// Testing limited stream
stream.public(config.username, config.password,function(tweet) {
	if (tweet.text != undefined) {
		console.log(twitter.autoLink(tweet.text));
	}
});
