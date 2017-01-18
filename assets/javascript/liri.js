//________________________________________________________________________________________________

// Write the code you need to grab the data from keys.js. Then store the keys in a variable.
var twitterKeys = require("./keys.js");
console.log(twitterKeys);

// Pulls in command line arguments.
var cmdArgs = process.argv;

//__________________________________________________________________________________________________
// 1. `node liri.js my-tweets`
// 	* This will show your last 20 tweets and when they were created at in your terminal/bash window.
//DONE!
if (cmdArgs[2] === "my-tweets") {
 	var Twitter = require('twitter');
 
	var client = new Twitter({
	  consumer_key: twitterKeys.twitterKeys.consumer_key,
	  consumer_secret: twitterKeys.twitterKeys.consumer_secret,
	  access_token_key: twitterKeys.twitterKeys.access_token_key,
	  access_token_secret: twitterKeys.twitterKeys.access_token_secret
	});

	var params = {screen_name: 'SenSanders'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    for (var i = 0; i<20; i++) {
	    	console.log(tweets[i].text);
	    	console.log(tweets[i].created_at);
	    	console.log("______________________________________________________________________");
	    }
	  }
	});
}

//__________________________________________________________________________________________________
// 2. `node liri.js spotify-this-song '<song name here>'`
// 	* This will show the following information about the song in your terminal/bash window
// 		* Artist(s)
//		data.tracks.items[0].artists.name
// 		* The song's name
//		data.tracks.items[0].name
// 		* A preview link of the song from Spotify
//		data.tracks.items[0].preview_url
// 		* The album that the song is from
//		data.tracks.items[0].album.name
// 	* if no song is provided then your program will default to
// 		* "The Sign" by Ace of Base
//DONE!
else if (cmdArgs[2] === "spotify-this-song") {
	var spotify = require('spotify');

	var songName = '';

	if (cmdArgs[3]) {
		for (var i = 3; i<cmdArgs.length; i++) {
			songName = songName + " " + cmdArgs[i];
		}
	}
	else {
		songName = "The Sign Ace of Base";
	}

	console.log(songName);
	 
	spotify.search({ type: 'track', query: songName }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 	else {
	 		console.log("Artist: " + data.tracks.items[0].artists[0].name);
	 		console.log("Song name: " + data.tracks.items[0].name);
	 		console.log("Preview URL: " + data.tracks.items[0].preview_url);
	 		console.log("Album: " + data.tracks.items[0].album.name); 
	 	}
	});
	
}

//__________________________________________________________________________________________________
// 3. `node liri.js movie-this '<movie name here>'`
// 	* This will output the following information to your terminal/bash window:
// 		* Title of the movie.
// 		* Year the movie came out.
// 		* IMDB Rating of the movie.
// 		* Country where the movie was produced.
// 		* Language of the movie.
// 		* Plot of the movie.
// 		* Actors in the movie.
// 		* Rotten Tomatoes Rating.
// 		* Rotten Tomatoes URL.
// 	* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// 		* If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// 		* It's on Netflix!
else if (cmdArgs[2] === "movie-this") {
  //Do things
}

//__________________________________________________________________________________________________
// 4. `node liri.js do-what-it-says`
// 	* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// 		* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// 		* Feel free to change the text in that document to test out the feature for other commands.
else if (cmdArgs[2] === "do-what-it-says") {
  //Do things
}