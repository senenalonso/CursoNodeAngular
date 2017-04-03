'use strict'

var Favorito = require('../models/favorito');

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

	Favorito.findById(favoritoId, (err, favorito) => {
		if(err){
			res.status(500).send({message: 'Error al devolver el favorirto'})
		} else {
			if (!favorito){
				res.status(404).send({message: 'No hay favoritos'})
			} else {
				res.status(200).send({favorito});
			}
		}
	})
}

function getFavoritos (req, res) {
	Favorito.find({}).sort('title').exec((err, favoritos) => {
		if(err){
			res.status(500).send({message: 'Error al devolver los favorirtos'})
		} else {
			if (!favoritos){
				res.status(404).send({message: 'No hay favoritos'})
			} else {
				res.status(200).send({favoritos});
			}
		}
	});
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
	});
}

function updateFavorito (req, res) {
	var favoritoId = req.params.id;
	var update = req.body;

	Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) => {
		if(err){
			res.status(500).send({message: 'Error al actualizar el favorirtoo'})
		}
		res.status(200).send({favorito: favoritoUpdated});
	});
}

function deleteFavorito (req, res) {
	var favoritoId = req.params.id;

	Favorito.findById(favoritoId, (err, favorito) => {
		if(err){
			res.status(500).send({message: 'Error al buscar el favorirto'})
		}

		if (!favorito){
			res.status(404).send({message: 'No hay favorito con ese Id'})
		} else {
			favorito.remove(err => {
				if(err){
					res.status(500).send({message: 'Error al borrar el favorito'})
				}else{					
					res.status(200).send({message: 'El favorito se ha eliminado!!'})
				}
			})
		}

	});
}

module.exports = {
  prueba,
  getFavorito,
  getFavoritos,
  saveFavorito,
  updateFavorito,
  deleteFavorito
}