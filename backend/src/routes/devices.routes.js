
const { Router } = require('express')
const resolver = require('../shared/utils/Resolver')

const { DeviceController } = require('../controllers/DeviceController')
const DeviceRepository = require('../repositories/DeviceRepository')
const Device = require('../models/device')

const deviceRepository = new DeviceRepository(Device)
const deviceController = new DeviceController(deviceRepository)

const deviceRoutes = Router()

deviceRoutes.get('/', resolver(deviceController.list))

deviceRoutes.post('/', resolver(deviceController.create))

deviceRoutes.get('/:id', resolver(deviceController.findOne))

deviceRoutes.put('/:id', resolver(deviceController.update))

deviceRoutes.delete('/:id', deviceController.delete)

module.exports = { deviceRoutes }
