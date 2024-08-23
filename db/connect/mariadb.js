const mariadb = require('mysql2');

// mysql method
const conn = mariadb.createConnection(
  // DB 호출을 위한 정보
  {
    host: 'localhost',
    // db server port
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'Tennis'
  }
);

module.exports = conn;