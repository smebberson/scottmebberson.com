
/*
 * GET home page.
 */

exports.lifestreaming = function(req, res) {
  res.render('lifestreaming', { title: 'Life streaming' });
};

exports.postindex = function (req, res) {
	res.render('post-index', { title: 'Post index' });
}