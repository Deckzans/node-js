
function error (mensaje,code)  { 
    let e = new error(mensaje); 

    if(code)  { 
        e.statusCode = code;
    }

    return e

}

    module.exports = e;