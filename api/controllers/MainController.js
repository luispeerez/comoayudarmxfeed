module.exports = {
	index: function(req, res){
		TwitterService.getTweets()
			.then(function(tweets){
				return res.view('homepage.ejs',{
					tweets:tweets
				});
			});
	},

	necesitamos: function(req, res){
		TwitterService.getTweets('#necesitamos')
			.then(function(tweets){
				return res.view('homepage.ejs',{
					tweets:tweets
				});
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},


	tenemos: function(req, res){
		TwitterService.getTweets('#tenemos')
			.then(function(tweets){
				return res.view('homepage.ejs',{
					tweets:tweets
				});
			});
	},

	voluntarios: function(req, res){
		TwitterService.getTweets('#voluntarixs')
			.then(function(tweets){
				return res.view('homepage.ejs',{
					tweets:tweets
				});
			});
	},


	autosamigos: function(req, res){
		TwitterService.getTweets('#autosamigos')
			.then(function(tweets){
				return res.view('homepage.ejs',{
					tweets:tweets
				});
			});
	}







};