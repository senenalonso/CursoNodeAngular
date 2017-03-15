'use strict'

var favorito = require('../models/favorito');

function prueba(req, res) {

	if (req.params.nombre) {
		var nombre = req.params.nombre;
	} else {
		var nombre = "SIN NOMBRE";
	}

	res.status(200).send({
									data: [2,3,4],
									texto: "Hola mundo con NodeJS y EXPRESS - " + nombre
								});
}

function getFavorito (req, res) {
	var favoritoId = req.params.id;
	res.status(200).send({data: favoritoId});
}

function getFavoritos (req, res) {
}

function saveFavorito (req, res) {
	var favorito = new Favorito();

	var params = req.body;

	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err, obj) => {
		if(err) {
			res.status(500).send({message: 'Error al guardar el marcador'})
		}
			res.status(200).send({favorito: obj})
	})
}

function updateFavorito (req, res) {
	var params = req.body;
	res.status(200).send({update: true, favorito: params})
}

function deleteFavorito (req, res) {
	var params = req.body;
	res.status(200).send({delete: true, favorito: params})
}

module.exports = {
  prueba,
  getFavorito,
  getFavoritos,
  saveFavorito,
  updateFavorito,
  deleteFavorito
}