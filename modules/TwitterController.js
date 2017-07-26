var Twitter = require('twitter');

module.exports = function(keys) {
	var self = this;
	this.client = new Twitter({
	  consumer_key: keys.twitter_key,
	  consumer_secret: keys.twitter_secret,
	  access_token_key: keys.twitter_token,
	  access_token_secret: keys.twitter_token_secret
	});

	this.getTweets = function() {
		var params = {screen_name: 'liri_man', limit: 20};
		this.client.get('statuses/user_timeline', params, function(error, tweets, response) {
		  if (!error) {
		    tweets.forEach(function(tweet, index) {
					console.log(index + 1, tweet.text);
		    });
		  }	else {
		  	console.log(error);
		  }
		});
	};
};
