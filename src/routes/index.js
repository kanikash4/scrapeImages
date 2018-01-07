'use strict';

var imageController = require('./controller/image');

module.exports = function(app) {
	app.all('/_status', function(req, res, next) {
		res.sendStatus(200);
	});

	app.get('getImages', controller.l);

	app.get('listKeywords','');

};