const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
//endpoint for root (/)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

//endpoint for users (/users)
  app.get('/users', db.getUsers)


  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

