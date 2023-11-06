//Importaciones de app
const express = require('express'); 

//importaciones locales
const respuesta = require('../../red/respuesta')
const controlador = require('./index');


const router = express.Router();


router.get('/', todos);
router.get('/:id',uno);
router.post('/',agregar)
router.delete('/',eliminar);


 async function todos (req, res,next){

    try{ 
        // const todos = await controlador.todos()
        const items = await controlador.todos()
        respuesta.succes(req,res,items,200)
    }catch(err){ 
        console.log(err)
        next(err);
    }
}



 async function uno (req, res,next){

    try{ 
        const items = await controlador.uno(req.params.id)
        if(items.length === 0) { 
            const error = new Error("El elemento no fue encontrado"); // Crear un error personalizado
            error.statusCode = 404; // Establecer el código de estado 404 para indicar que no se encontró el elemento
            throw error; // Lanzar el error
        }
        respuesta.succes(req,res,items,200)
    }catch(err){ 
        next(err);
    }


}

async function agregar (req, res,next){

    try{ 
        const items = await controlador.agregar(req.body);

        if(req.body.id == 0){ 
            mensaje = 'item guardado con exito '
        }else{ 
            mensaje = 'item actualizado con exito'
        }
        respuesta.succes(req,res,'item actualizado correctamente',201)
    }catch(err){ 
        next(err);
    }


}


async function eliminar (req, res,next){

    try{ 
        const items = await controlador.eliminar(req.body)
        respuesta.succes(req,res,'item eliminado correctamente',200)
    }catch(err){ 
        next(err);
    }


}



module.exports = router;