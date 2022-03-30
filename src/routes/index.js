
const { Router } = require('express')
const { deviceRoutes } = require('./devices.routes')
const { categoryRoutes } = require('./category.routes')

const routes = Router()

routes.use('/device', deviceRoutes)
routes.use('/category', categoryRoutes)

module.exports = { routes }
