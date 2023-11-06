//importacion de entorno de variable
require('dotenv').config();

module.exports = { 
    app: { 
        port: process.env.port || 4000
    },
    mysql:{ 
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || 'ejemplo'
    }
}