'use strict'

var Album = require('../models/album');

function getAlbum(req, res) {
	var albumId = req.params.id;

	Album.findById(albumId, (err, album) => {
		if(err) {
			res.status(500).send({message: "Error en la petición"});		
		} else {
				if(!album){
					res.status(404).send({message: "El album no existe!!"});
				} else {
					res.status(200).send({album});
				}
		}
	});
}


function getAlbums(req, res) {

	Album.find({}, (err, albums) => {
		if(err) {
			res.status(500).send({message: "Error en la petición"});		
		} else {
				if(!albums){
					res.status(404).send({message: "No hay albums!!"});
				} else {
					res.status(200).send({albums});
				}
		}
	});
}

function saveAlbum(req, res) {

	var album = new Album();

	var params = req.body;

	album.title = params.title;
	album.description = params.description;

	album.save((err, albumStored) => {
		if(err) {
			res.status(500).send({message: "Error al guardar el album"});		
		} else {
				if(!albumStored){
					res.status(404).send({message: "No se ha guardado el album!!"});
				} else {
					res.status(200).send({albun: albumStored});
				}
		}
	});
}

function updateAlbum(req, res) {
	var albumId = req.params.id;
	var update = req.body;

	Album.findByIdAndUpdate(albumId, update, (err, albumUpdated) => {
		if(err) {
			res.status(500).send({message: "Error en la petición"});		
		} else {
				if(!albumUpdated){
					res.status(404).send({message: "El album a modificar no existe!!"});
				} else {
					res.status(200).send({albumUpdated});
				}
		}
	});
}

function deleteAlbum(req, res) {
	var albumId = req.params.id;
	var update = req.body;

	Album.findByIdAndRemove(albumId, (err, albumDeleted) => {
		if(err) {
			res.status(500).send({message: "Error en la petición"});		
		} else {
				if(!albumDeleted){
					res.status(404).send({message: "El album a borrar no existe!!"});
				} else {
					res.status(200).send({albumDeleted});
				}
		}
	});
}

module.exports = {
	getAlbum,
	getAlbums,
	saveAlbum,
	updateAlbum,
	deleteAlbum
}