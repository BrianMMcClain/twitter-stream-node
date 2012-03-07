var fs = require('fs');

var stream = require('../lib/stream.js');

var config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));

stream.public(config.username, config.password, function(tweet) {
		// Iterate over each hashtag
		tweet.entities.hashtags.forEach(function(hashtag) {
			console.log(hashtag.text);
		})
});