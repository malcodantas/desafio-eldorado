const DeviceModel = require('../models/device')
const Category = require('../models/category')
class DeviceRepository {
  constructor () {
    this.model = DeviceModel
  }

  async getAllDevices () {
    const allDevices = await this.model.findAll()
    const allDevicesObj = []
    allDevices.forEach(device => {
      allDevicesObj.push(device.dataValues)
    })
    return allDevicesObj
  }

  async getById (id) {
    const device = await this.model.findByPk(id, { include: Category })
    return device
  }

  async create (device) {
    const { categoryId, color, partNumber } = device
    const newDevice = await this.model.create({ categoryId: categoryId, color: color, partNumber: partNumber })
    return newDevice
  }

  async delete (id) {
    const deletedDevice = await this.model.destroy({
      where: { id: id }
    })
    return { deletedDevice, id }
  }

  async update (device) {
    const deviceToUpdate = await this.getById(device.id)
    const updatedDevice = deviceToUpdate.update({ ...device })
    return updatedDevice
  }
}

module.exports = DeviceRepository
