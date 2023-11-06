const respuesta = require('./respuesta');

function errors(err,req,res,next) { 
    console.log('error',err)

    const message = err.message || 'Error interno'
    const status = err.statusCode || 50

    respuesta.error(req,res,message,status)
}

module.exports = errors;