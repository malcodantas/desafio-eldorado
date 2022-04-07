
const { Router } = require('express')
const DeviceRepository = require('../repositories/DeviceRepository')
const deviceRoutes = Router()
const { DeviceController } = require('../controllers/DeviceController')
const resolver = (handlerFn) => {
  return (req, res, next) => {
    return Promise.resolve(handlerFn(req, res, next))
      .catch(e => next(e))
  }
}
const deviceController = new DeviceController()

deviceRoutes.get('/', resolver(deviceController.list))

deviceRoutes.get('/:id', async (request, response) => {
  const deviceRepository = new DeviceRepository()
  const id = request.params.id
  const deviceObj = await deviceRepository.getById(id)
  response.json(deviceObj)
})

deviceRoutes.post('/', resolver(deviceController.create))

deviceRoutes.put('/:id', resolver(deviceController.update))

deviceRoutes.delete('/:id', deviceController.delete)
module.exports = { deviceRoutes }
