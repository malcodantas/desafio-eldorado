const express = require('express')
const { routes } = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)
app.get('/', (request, response) => {
  response.json('API está rodando')
})
app.listen(3333, () => {
  console.log('API is UP')
})
