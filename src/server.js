const express = require('express')
const { routes } = require('./routes')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(routes)

app.get('/', (request, response) => {
  response.json(`API está rodando na porta ${PORT}`)
})

app.listen(PORT, () => {
  console.log(`API running on: http://127.0.0.1:${PORT}`)
})
