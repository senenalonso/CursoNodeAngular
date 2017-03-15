'use strict'

var app = require('./app');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err, res) =>{

	if(err){
		throw err;
	} else {
		console.log('Conexión a MongoDB correcta');
		app.listen(3000, function() {
			console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
		});
	}

});