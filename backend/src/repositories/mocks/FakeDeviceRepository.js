
class FakeDeviceRepository {
  constructor () {
    // mock examples
    this.devices = [{
      id: 1,
      categoryId: '2',
      color: 'red',
      partNumber: '5'
    }, {
      id: 2,
      categoryId: '2',
      color: 'blue',
      partNumber: '5'
    }]
  }

  async getAll () {
    const all = this.devices
    const allObj = []
    all.forEach(device => {
      allObj.push(device)
    })
    return allObj
  }

  async getById (id) {
    const device = await this.devices.filter((device) => { return device.id === id })
    if (device) {
      return device[0]
    }
    return {}
  }

  async create (device) {
    const newDevice = { ...device, id: Math.floor(Math.random() * 1000) + 2 }
    this.devices.push(newDevice)
    return newDevice
  }

  async delete (id) {
    const deletedDevice = await this.devices.filter((device) => { return device.id !== id })
    return { deletedDevice, id }
  }

  async update (device) {
    const DeviceToUpdate = await this.getById(device.id)
    let updatedDevice = {}
    this.devices.forEach((DeviceItem, index) => {
      if (DeviceItem.id === DeviceToUpdate.id) {
        this.devices[index] = { ...this.device, ...device }
        updatedDevice = this.devices[index]
      }
    })
    return updatedDevice
  }
}

module.exports = { FakeDeviceRepository }
