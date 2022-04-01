
const { Router } = require('express')
const deviceModel = require('../models/device')
const deviceRoutes = Router()

deviceRoutes.get('/', async (request, response) => {
  const allDevices = await deviceModel.findAll()
  const allDevicesObj = []
  allDevices.forEach(device => {
    allDevicesObj.push(device.dataValues)
  })
  response.json(allDevicesObj)
})

module.exports = { deviceRoutes }
