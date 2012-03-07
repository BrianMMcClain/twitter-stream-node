#twitter-stream-node

Created By Brian McClain


About
-----
twitter-stream is a Node.js module used to utilize the Twitter public stream easily. Currently, is uses Basic Authentication (username + password), OAuth support is under development

Examples
--------

Example 1 - Unlimited streaming

    var stream = require('twitter-stream');
    stream.public(username, password, function(tweet) {
        console.log(tweet.text);
    }

Example 2 - Limited streaming, only fetch 3 tweets

    var stream = require('twitter-stream');
    stream.public_limit(username, password, 3, function(tweet) {
        console.log(tweet.text);
    }