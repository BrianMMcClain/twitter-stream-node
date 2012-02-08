var request = require('request');
var fs = require('fs');

// Load config info
var config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));


request.get("https://" + config.username + ":" + config.password + "@stream.twitter.com/1/statuses/sample.json").pipe(fs.createWriteStream('/dev/stdout'));
