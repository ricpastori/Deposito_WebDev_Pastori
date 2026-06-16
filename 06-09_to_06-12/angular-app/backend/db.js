const mysql = require('mysql2/promise');

const dbConfig = {
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: 'todo_db',
  connectionLimit: 10,
  queueLimit: 0,
}

const pool = mysql.createPool(dbConfig)

async function initDatabase() {
  const connection = await mysql.createConnection({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
  })

  try{
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\``)
    await connection.query(`USE \`${dbConfig.database}\``)
    await connection.query(`CREATE TABLE IF NOT EXISTS ${dbConfig.database} (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`)
  } finally {
    await connection.end()
  }
}

module.exports = {
  query: (sql, params) => pool.query(sql, params),
  execute: (sql, params) => pool.execute(sql, params),
  getConnection: () => pool.getConnection(),
  end: () => pool.end(),
  initDatabase,
  config: dbConfig,
}
