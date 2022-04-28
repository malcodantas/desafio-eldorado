// require('dotenv').config()
const Category = require('../models/category')
class DeviceRepository {
  base_url=process.env.BASE_URL
  constructor (deviceModel) {
    this.model = deviceModel
  }

  async getAll () {
    const allDevices = await this.model.findAll({ include: Category })
    const allDevicesObj = []
    allDevices.forEach(device => {
      device.dataValues.links = {
        endpoint: `${this.base_url}/device/${device.dataValues.id}`
      }
      allDevicesObj.push(device.dataValues)
    })
    return allDevicesObj
  }

  async getById (id) {
    const device = await this.model.findByPk(id, { include: Category })
    device.dataValues.links = {
      endpoint: `${this.base_url}/device/${device.dataValues.id}`
    }
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
