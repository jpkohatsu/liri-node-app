// var Twitter = require ('twitter');
// var Spotify = require('node-spotify-api');
// var request = require('request');

var TwitterController = require('./modules/TwitterController');
var SpotifyController = require('./modules/SpotifyController');
var RequestController = require('./modules/RequestController');

var keys = require('./keys');

var Twitter = new TwitterController(keys);
var Spotify = new SpotifyController(keys);


var command = process.argv[2];

switch(command) {
	case 'my-tweets':
		Twitter.getTweets();
		break;
	case 'spotify-this-song':
		Spotify.search(process.argv[3]);
		break;
	case 'movie-this':
		Request.
		break;
	case 'do-what-it-says':
		
		break;
};


