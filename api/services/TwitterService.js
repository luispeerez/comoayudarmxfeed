var Twitter = require('twitter');
var Promise = require('bluebird');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

function getTweets(){
	var params = {
		screen_name: 'comoayudarmx',
		result_type: 'recent',
		//q: '#tenemos'
	};
	return new Promise(function(resolve, reject){
		//client.get('statuses/user_timeline', params, function(error, tweets, response) {
		client.get('search/tweets', params, function(error, tweets, response) {
		 	if(error){
		 		return reject(error);
		 	}
		 	resolve(tweets.statuses);
		});
	});
}

module.exports = {
	getTweets: getTweets
};