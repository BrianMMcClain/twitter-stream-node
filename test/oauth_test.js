var fs = require('fs');
var request = require('request');

var config = JSON.parse(fs.readFileSync("./config.json", "utf-8"));

