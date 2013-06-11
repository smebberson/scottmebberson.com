
var FeedMasher = require('feedmasher'),
	cache = new require('caching')('memory');

/*
 * GET home page.
 */

exports.lifestreaming = function(req, res) {

	// cache the content for a day
	cache('articles', 1000 * 60 * 60 * 24, function (passalong) {

		new FeedMasher(['https://github.com/smebberson.atom',
			'https://api.twitter.com/1/statuses/user_timeline.rss?screen_name=smebberson',
			'http://feeds.delicious.com/v2/rss/smebberson'], function (err, _articles) {

			if (err) {
				passalong(err, []);
				return;
			}

			// go through and format the articles
			for (article in _articles) {
				article.displayDate = _articles[article].pubDate.getFullYear();
				console.log(typeof _articles[article].pubDate);
			}

			passalong(null, _articles);

		}, function (article) {
			return article.pubDate || article.pubdate;
		});

	}, function (err, _articles) {

		var _articles = _articles || [];

		res.render('lifestreaming', { title: 'Life streaming', articles: _articles });

	});
	
};

exports.postindex = function (req, res) {
	res.render('post-index', { title: 'Post index' });
}