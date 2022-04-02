const express = require('express')
const { routes } = require('./routes')
const PORT = 3000

const sequelize = require('./database')
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const app = express()
app.use(express.json())
app.use(routes)

app.get('/', (request, response) => {
  response.json(`API está rodando na porta ${PORT}`)
})

app.listen(PORT, () => {
  console.log(`API running on: http://127.0.0.1:${PORT}`)
})
