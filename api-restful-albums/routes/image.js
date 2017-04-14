'use strict'

var express = require('express');
var ImageController =  require('../controllers/image');
var api = express.Router();

var multipart = require('connect-multiparty');
var multiparMiddleware = multipart({uploadDir: './uploads'});


api.get('/prueba-image', ImageController.pruebas);
api.get('/images/:album?', ImageController.getImages);
api.get('/image/:id', ImageController.getImage);
api.put('/image/:id', ImageController.updateImage);
api.delete('/image/:id', ImageController.deleteImage);
api.post('/image', ImageController.saveImage);


api.post('/upload-image/:id', multiparMiddleware, ImageController.uploadImage);

module.exports = api;