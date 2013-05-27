var wintersmith = require('wintersmith'),
	path = require('path'),
	util = require('util');


module.exports = function (loadWintersmith, wintersmithConfig) {

	wintersmithConfig = wintersmithConfig || path.resolve(__dirname, '../', '../', 'config.json');

	if (loadWintersmith) {

		wintersmith(wintersmithConfig, path.resolve(__dirname, '../', '../')).load(function () {
			console.log(util.inspect(arguments));
		});

	}

	return function (req, res, next) {

		// setup the page variable
		page = req.app.locals;
		page.url = req.url;

		next();

	}

}