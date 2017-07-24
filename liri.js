var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var request = require('request');

var keys = require('./keys');

console.log(keys.twitter_token_secret);

var client = new Twitter({
  consumer_key: keys.twitter_key,
  consumer_secret: keys.twitter_secret,
  access_token_key: keys.twitter_token,
  access_token_secret: keys.twitter_token_secret
});

var params = {screen_name: 'liri_man'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }	else {
  	console.log(error);
  }
});