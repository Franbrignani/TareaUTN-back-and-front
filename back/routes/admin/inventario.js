var express = require('express');
var router = express.Router();
var inventarioModel = require ('../../models/inventarioModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function(req, res, next) {

  var inventario = await inventarioModel.getInventario();

  inventario = inventario.map(inventario => {
    if(inventario.img_id) {
      const imagen = cloudinary.image(inventario.img_id, {
        width: 100,
        height: 200,
        crop: 'fill'
      });
      return {
        ...inventario,
        imagen
      }
    }else{
        return {
          ...inventario,
          imagen: ''
        }
      }
  });

  res.render('admin/inventario',{
    layout:'admin/layout',
    persona: req.session.nombre,
    inventario
  });
});

router.get('/nuevo', (req, res, next) => {
  res.render('admin/nuevo', {
    layout: 'admin/layout'
  })
});

router.post('/nuevo', async (req, res, next) => {
  try{

    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.genero != "" && req.body.autor != "") {
      await inventarioModel.insertlibro({
        ...req.body,
        img_id
      });
      res.redirect('/admin/inventario')
    } else {
      res.render('admin/nuevo', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error){
    console.log(error)
    res.render('admin/nuevo', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo el libro'
    })
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let inventario = await inventarioModel.getlibrobyId(id);
  if(inventario.img_id) {
    await (destroy(inventario.img_id));
  }

  await inventarioModel.borrarlibrobyId(id);
  res.redirect('/admin/inventario');
});

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var libro = await inventarioModel.getlibrobyId(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    libro
  })
});

router.post('/modificar', async (req, res, next) => {
  try{

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if(req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    }else{
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }

    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      genero: req.body.genero,
      autor: req.body.autor,
      img_id
    }
    console.log(obj)
    
    await inventarioModel.modificarlibrobyId(obj, req.body.id);
    res.redirect('/admin/inventario');
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el libro'
    })
  }
})

module.exports = router;