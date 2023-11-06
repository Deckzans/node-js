// const db = require('../../DB/mysql');

const TABLA = 'auth';



module.exports = function (dbinyectada) {

    let db = dbinyectada; 

    if(!db){ 
        db = require('../../DB/mysql');
    }


    function agregar (data){
        const authData= { 
            id: data.id,

        }

        if(data.usuario){ 
            authData.usuario = data.usuario;
        }


        if(data.password){ 
            authDatadata.password = data.password
        }

        return db.agregar(TABLA,authData)
    }
    
    
  
    
    return{ 
        agregar, 
    }
}