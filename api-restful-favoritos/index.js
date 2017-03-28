'use strict'

var app = require('./app');
var port = process.env.PORT || 3678;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err, res) =>{

	if(err){
		throw err;
	} else {
		console.log('Conexión a MongoDB correcta');
		app.listen(3678, function() {
			console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
		});
	}

});