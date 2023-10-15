const mysql = require('mysql');
const config = require('../configure');

const dbconfig = { 
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let conexion;

function conexionMysql (){ 
    conexion = mysql.createConnection(dbconfig);

conexion.connect((err) => { 
    if(err){ 
        console.log('[db err]',err);
        setTimeout(conexionMysql,2000)
    }else{ 
        console.log('DB CONECTADA')
    }
});

    conexion.on('error', err => { 
        console.log('[db err]',err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){ 
            conexionMysql();
        }else{ 
            throw err;
        }
    });

}

conexionMysql();

function todos(tabla){ 
    return new Promise ( (resolve,reject) => { 
        conexion.query(`SELECT * FROM ${tabla}`,(error, result) => { 
            if(error){ 
                setTimeout(function(){ alert('Verificando errores... ')},2000)
                return reject(error)
            }
            resolve(result);
        })

    } )
}

function uno(tabla,id){ 

}

function agregar(tabla,data){

}

function eliminar(tabla,id){

}

module.exports={ 
    todos,
    uno,
    agregar,
    eliminar
}