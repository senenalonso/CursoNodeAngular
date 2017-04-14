'use strict'

var path = require('path');
var Image = require('../models/image');
var Album = require('../models/album');

function pruebas(req, res) {
	res.status(200).send({message: 'Pruebas de controlador de images'})
}

function getImage(req, res) {
	var imageId = req.params.id;

	Image.findById(imageId, (err, image) => {
		_executeWithErrorControl(res, err, image, 'image');
	});
}


function saveImage(req, res) {
	var image = new Image();

	var params = req.body;
	image.title = params.title;
	image.picture = null;
	image.album = params.album;

	image.save((err, imageStored) => {
		_executeWithErrorControl(res, err, imageStored, 'image');
	});
}


function updateImage(req, res) {
	var imageId = req.params.id;
	var update = req.body;

	Image.findByIdAndUpdate(imageId, update, (err, imageUpdated) => {
		_executeWithErrorControl(res, err, imageUpdated, 'image');
	});
}


function deleteImage(req, res) {
	var imageId = req.params.id;

	Image.findByIdAndRemove(imageId, (err, imageDeleted) => {
		_executeWithErrorControl(res, err, imageDeleted, 'image');
	});
}


function getImages(req, res) {
	var albumId = req.params.album;

	if (!albumId) {
		//Sacar todas las imagenes de la bbdd
		var imagesFinded = Image.find({}).sort('title')
	} else {
		//Sacar todas las imagenes del album indicado
		var imagesFinded = Image.find({album: albumId}).sort('title')
	}

	imagesFinded.exec((err, images) => {
		_executeWithErrorControl(res, err, images, 'images');
	});
}


function uploadImage(req, res){
	var imageId = req.params.id;
	var file_name = 'No subido...'

	if(req.files){ 
		var file_path = req.files.image.path;
		var file_split = file_path.split('/');
		var file_name = file_split[1];

		Image.findByIdAndUpdate(imageId, {picture: file_name}, (err, imageUpdated) => {
		_executeWithErrorControl(res, err, imageUpdated, 'image');
		});

	} else {
		res.status(400).send({message: 'No se ha recibido ninguna imagen'})
	}

}


function _executeWithErrorControl(res, err, obj, elem) {	
	if(err){
		res.status(500).send({message: 'Error en la petición'})
	} else {
		if (!obj){
			res.status(404).send({message: 'No existe el objeto'})
		} else {
			_populateWithAlbum(res, obj, elem);					
		}
	}
}

function _populateWithAlbum (res, obj, elem){
	Album.populate(obj, {path: 'album'}, (err, obj) => {
		if(err){
			res.status(500).send({message: 'Error en la petición'})
		} else {
			res.status(200).send({elem: obj})					
		}											
	});			
}


module.exports = {
	pruebas,
	getImage,
	saveImage,
	updateImage,
	deleteImage,
	getImages,
	uploadImage
}