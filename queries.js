const Pool = require('pg').Pool
const pool = new Pool({
  user: 'kalai',
  host: 'localhost',
  database: 'userdb',
  password: 'password',
  port: 5432,
})

//GET all users..Our first endpoint will be a GET request.
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getUsers,
    /* getUserById,
    createUser,
    updateUser,
    deleteUser, */
  }
  