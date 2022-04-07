
const { Router } = require('express')
const { DeviceController } = require('../controllers/DeviceController')
const resolver = require('../shared/utils/Resolver')
const deviceController = new DeviceController()
const deviceRoutes = Router()

deviceRoutes.get('/', resolver(deviceController.list))

deviceRoutes.post('/', resolver(deviceController.create))

deviceRoutes.get('/:id', resolver(deviceController.findOne))

deviceRoutes.put('/:id', resolver(deviceController.update))

deviceRoutes.delete('/:id', deviceController.delete)

module.exports = { deviceRoutes }
