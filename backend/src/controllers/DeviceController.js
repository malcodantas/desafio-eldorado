const VerifyMandatoryParams = require('../shared/utils/VerifyMandatoryParams')

class DeviceController {
  constructor (repository) {
    this.repository = repository
  }

  create = async (request, response)=> {
    const requiredFields = ['categoryId', 'color', 'partNumber']
    VerifyMandatoryParams(requiredFields, request.body)

    const { categoryId, color, partNumber, name } = request.body
    const createdDevice = await this.repository.create({ categoryId, color, partNumber,name })
    return response.status(201).json({ statusCode: 201, data: createdDevice })
  }

  list = async(request, response) =>{
    const allDevicesObj = await this.repository.getAll()
    return response.status(200).json({ statusCode: 200, data: allDevicesObj })
  }

  delete = async(request, response)=> {
    const id = request.params.id
    await this.repository.delete(id)
    return response.status(200).json({ statusCode: 200 })
  }

  update = async(request, response) => {
    const device = {
      ...request.body,
      id: request.params.id
    }
    const updatedDevice = await this.repository.update(device)
    return response.status(200).json({ statusCode: 201, data: updatedDevice })
  }

  findOne = async (request, response) => {
    const id = request.params.id
    const deviceObj = await this.repository.getById(id)
    return response.status(200).json({ statusCode: 200, data: deviceObj })
  }
}

module.exports = { DeviceController }
