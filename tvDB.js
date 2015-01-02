var databaseUrl = 'mongodb://localhost:27017/moviedb';
//var databaseUrl = 'mongodb://heroku_app32949176:662s0b9872fupjmvj6dpb36hdo@ds029831.mongolab.com:29831/heroku_app32949176';
var collections = ["tvShow","tvEpisodes","tvSeasons","tvShowCollection"];
var mongodb = require("mongojs").connect(databaseUrl, collections);

//Ensure Constraints in the DB
mongodb.tvShowCollection.ensureIndex({tvShowID : 1, tvShowSeason: 1, tvShowEpisode: 1}, {unique : true, dropDups: true});
mongodb.tvEpisodes.ensureIndex({tvShowID : 1, season_number: 1, episode_number: 1}, {unique : true, dropDups: true});
mongodb.tvSeasons.ensureIndex({tvShowID : 1, season_number :1}, {unique : true});
mongodb.tvShow.ensureIndex({id : 1}, {unique : true});

module.exports = {

	saveTvShow : function (tvShow) {
		mongodb.tvShow.save(tvShow);
	},

	saveTvSeasons : function (season) {
		mongodb.tvSeasons.save(season);
	},

	saveTvEpisodes : function (episode) {
		mongodb.tvEpisodes.save(episode);
	},

	saveTvCollection : function(collections) {
		mongodb.tvShowCollection.save(collections);
	}

};
