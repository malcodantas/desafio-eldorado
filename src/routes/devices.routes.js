
const { response } = require('express')
const { Router } = require('express')
const Device = require('../models/device')
// const deviceModel = require('../models/device')
const DeviceRepository = require('../repositories/DeviceRepository')
const deviceRoutes = Router()

deviceRoutes.get('/', async (request, response) => {
  const deviceRepository = new DeviceRepository()
  const allDevicesObj = await deviceRepository.getAllDevices()
  response.json(allDevicesObj)
})

deviceRoutes.get('/:id', async (request, response) => {
  const deviceRepository = new DeviceRepository()
  const id = request.params.id
  const deviceObj = await deviceRepository.getById(id)
  response.json(deviceObj)
})

deviceRoutes.post('/', async (request, response) => {
  const deviceRepository = new DeviceRepository()
  const { category, color, partNumber } = request.body
  const createdDevice = await deviceRepository.create({ category, color, partNumber })
  response.json(createdDevice)
})

deviceRoutes.delete('/:id', async (request, response) => {
  const deviceRepository = new DeviceRepository()
  const id = request.params.id
  const deletedDevice = await deviceRepository.delete(id)
  if (deletedDevice.deletedDevice === 1) {
    response.status(200)
    response.json({ id: deletedDevice.id, msg: 'Device excluido com sucesso' })
  }
  response.status(500)
  response.json({ id: deletedDevice.id, msg: 'Não foi possível excuir o device ou device não existe' })
})
module.exports = { deviceRoutes }
