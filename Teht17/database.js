const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'jepulis',
  database: 'rest_db'
});
module.exports = connection;