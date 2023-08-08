var express = require('express');
var router = express.Router();
var inventarioModel = require('./../models/inventarioModel');
var cloudinary = require('cloudinary').v2;

router.get('/inventario', async function (req, res, next) {
    let inventario = await inventarioModel.getInventario();

    inventario = inventario.map(inventario => {
        if (inventario.img_id) {
            const imagen = cloudinary.url(inventario.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...inventario,
            }
        } else {
            imagen
            return {
                ...inventario,
                imagen: ''
            }
        }
    });
    res.json(inventario);
});

module.exports = router;