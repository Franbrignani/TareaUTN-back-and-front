var express = require('express');
var router = express.Router();
var inventarioModel = require('../models/inventarioModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

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
                imagen
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

//Envio de email
router.post('/contacto', async (req, res) => {
    const mail = {
        to:'fran2001@outlook.com',
        subject: 'Contacto web', 
        html: `${req.body.nombre} se contacto por la web y quiere más informacion a este correo ${req.body.email} <br>
        Ademas, hizo el siguiente comentario: ${req.body.mensaje} <br> Su telefono es: ${req.body.telefono}`
    }

    const bookland = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await bookland.sendMail(mail)

    res.status(201).json({
        error: false,
        messager: 'Mensaje enviado'
    });

});

module.exports = router;