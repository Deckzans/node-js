//importaccion de app
const app = require('./app')

//Configuracion de servidor
app.listen(app.get('port'), () =>{ 
    console.log('Servidor escuchando en el puerto',app.get('port') )
} )