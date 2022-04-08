const DeviceRepository = require('../repositories/DeviceRepository')
const VerifyMandatoryParams = require('../shared/utils/VerifyMandatoryParams')

class DeviceController {
  async create (request, response) {
    const requiredFields = ['categoryId', 'color', 'partNumber']
    VerifyMandatoryParams(requiredFields, request.body)

    const { categoryId, color, partNumber } = request.body
    const deviceRepository = new DeviceRepository()
    const createdDevice = await deviceRepository.create({ categoryId, color, partNumber })
    return response.status(201).json({ statusCode: 201, data: createdDevice })
  }

  async list (request, response) {
    const deviceRepository = new DeviceRepository()
    const allDevicesObj = await deviceRepository.getAll()
    return response.status(200).json({ statusCode: 200, data: allDevicesObj })
  }

  async delete (request, response) {
    const deviceRepository = new DeviceRepository()
    const id = request.params.id
    await deviceRepository.delete(id)
    return response.status(200).json({ statusCode: 200 })
  }

  async update (request, response) {
    const deviceRepository = new DeviceRepository()
    const device = {
      ...request.body,
      id: request.params.id
    }
    const updatedDevice = await deviceRepository.update(device)
    return response.status(200).json({ statusCode: 201, data: updatedDevice })
  }

  async findOne (request, response) {
    const deviceRepository = new DeviceRepository()
    const id = request.params.id
    const deviceObj = await deviceRepository.getById(id)
    return response.status(200).json({ statusCode: 200, data: deviceObj })
  }
}

module.exports = { DeviceController }
