//importaciones de apps
const mysql = require('mysql');

//importaciones locales
const config = require('../configure');

const dbconfig = { 
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let conexion;


//Processos en sql 

function conexionMysql (){ 
    conexion = mysql.createConnection(dbconfig);

conexion.connect((err) => { 
    if(err){ 
        console.log('[db err]',err);
        setTimeout(conexionMysql,2000)
    }else{ 
        console.log('La conexion MYSQWL Fue exitosa')
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
            console.log(result)
            return error ? reject(error) :resolve(result)
        })

    } )
}

function uno(tabla,id){ 

    return new Promise ( (resolve,reject) => { 
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`,(error, result) => { 
          return error ? reject(error) : resolve(result)
        })

    } )
}

function agregar(tabla,data){
    return new Promise ( (resolve,reject) => { 
        conexion.query(`INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`, [data,data] , (error, result) => { 
          return error ? reject(error) : resolve(result)
        })

    } )
}




function eliminar(tabla,data){
    return new Promise ( (resolve,reject) => { 
        conexion.query(`DELETE FROM ${tabla} WHERE id = ?`, data.id , (error, result) => { 
          return error ? reject(error) : resolve(result)
        })

    } )
}

module.exports={ 
    todos,
    uno,
    agregar,
    eliminar
}