
const { Router } = require('express')
const { deviceRoutes } = require('./devices.routes')

const routes = Router()
routes.use('/device', deviceRoutes)

module.exports = { routes }
