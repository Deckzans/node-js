const express = require('express'); 
const respuesta = require('../../red/respuesta')
const controlador = require('./controlador')

const router = express.Router();

router.get('/', async function(req, res){
    const todos = await controlador.todos()
    .then((items) => { 
        respuesta.succes(req,res,items,200)
    })
})

module.exports = router;