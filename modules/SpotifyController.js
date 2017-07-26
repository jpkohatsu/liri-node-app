var Spotify = require('node-spotify-api');

module.exports = function(keys) {
	this.client = new Spotify({
	  id: keys.spotify_id,
	  secret: keys.spotify_secret
	});

	this.search = function(name) {
		this.client.search({ type: 'track', query: name, limit: 1}, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		  }
		 	var song = data.tracks.items[0];
			console.log(
				` Artist: ${song.artists[0].name} \n Song Name: ${song.name} \n Preview: ${song.preview_url ? song.preview_url : 'No Preview'} \n Album: ${song.album.name}`);
		});
	};
};