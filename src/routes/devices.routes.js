
const { Router } = require('express')

const deviceRoutes = Router()

deviceRoutes.get('/', (request, response) => {
  response.json({ msg: 'Device Route' })
})

module.exports = { deviceRoutes }
