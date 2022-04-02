const { request } = require('express')
const deviceModel = require('../models/device')

class DeviceRepository {
  constructor () {
    this.model = deviceModel
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
    const device = await this.model.findOne({ where: { id: id } })
    return device
  }

  async create (device) {
    const { category, color, partNumber } = device
    const newDevice = await this.model.create({ category: category, color: color, partNumber: partNumber })
    return newDevice
  }

  async delete (id) {
    const deletedDevice = await this.model.destroy({
      where: { id: id }
    })
    return { deletedDevice, id }
  }
}

module.exports = DeviceRepository
