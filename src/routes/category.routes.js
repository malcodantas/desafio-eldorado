
const { Router } = require('express')

const categoryRoutes = Router()

categoryRoutes.get('/', (request, response) => {
  response.json({ msg: 'Category Route' })
})

module.exports = { categoryRoutes }
