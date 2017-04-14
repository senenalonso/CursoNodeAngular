'use strict'

var app = require('./app');
var port = process.env.PORT || 3700;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/albums',(err, res) => {

	if(err){
		throw err;
	} else {
		console.log('Conexión a MongoDB correcta');
		app.listen(port, function() {
			console.log(`API REST ALBUMS funcionando en http://localhost:${port}`);
		});
	}

});