import mysql from 'mysql2/promise';
import "dotenv/config"


import dotenv from 'dotenv';
dotenv.config();

console.log('Conectando com as seguintes credenciais:');
console.log(`Host: ${process.env.MYSQL_HOST}`);
console.log(`User: ${process.env.MYSQL_USER}`);
console.log(`Port: ${process.env.MYSQL_PORT}`);
console.log(`Database: ${process.env.MYSQL_DB}`);

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
    
    typeCast: function (field, next) {
      
      if (field.type === 'TINY' && field.length === 1) {
          return (field.string() === '1'); 
      }
      else if (field.type.includes('DECIMAL')) {
        return Number(field.string());
      }
      else {
          return next();
      }
    }
})

console.log('--> DB conectado <--');
export default con;
