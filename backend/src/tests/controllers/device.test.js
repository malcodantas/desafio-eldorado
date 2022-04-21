const { DeviceController } = require('../../controllers/DeviceController')
const { FakeDeviceRepository } = require('../../repositories/mocks/FakeDeviceRepository')
const MockExpressRequest = require('mock-express-request')
const MockExpressResponse = require('mock-express-response')
const MissingParamError = require('../../shared/errors/MissingParamError')

describe('DeviceController', () => {
  let deviceController
  let fakeDeviceRepository
  beforeEach(() => {
    fakeDeviceRepository = new FakeDeviceRepository()
    deviceController = new DeviceController(fakeDeviceRepository)
  })
  it('Should be able to list devices', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest()
    const devicesPromise = await deviceController.list(request, response)
    let responseObj = devicesPromise._getJSON()
    expect(responseObj.statusCode).toBe(200)
  })
  it('Should be able to create a device', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest({
      body:
        {
          categoryId: '1',
          color: 'red',
          partNumber: '5'
        }
    })
    // create a new device
    const devicesPromise = await deviceController.create(request, response)
    let responseObj = {}
    responseObj = devicesPromise._getJSON()
    expect(responseObj.statusCode).toBe(201)
    expect(responseObj.data).toHaveProperty('id')
  })
  it('Should not be able to create a device without categoryId parameter', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest({
      body:
        {
          color: 'red',
          partNumber: '5'
        }
    })
    // create a new device
    expect(deviceController.create(request, response))
      .rejects.toThrow(MissingParamError)
  })
  it('Should not be able to create a device without color parameter', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest({
      body:
        {
          categoryId: '2',
          partNumber: '5'
        }
    })
    // create a new device
    expect(deviceController.create(request, response))
      .rejects.toThrow(MissingParamError)
  })
  it('Should not be able to create a device without partNumber parameter', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest({
      body:
        {
          categoryId: '2',
          color: 'red'
        }
    })
    // create a new device
    expect(deviceController.create(request, response))
      .rejects.toThrow(MissingParamError)
  })
  it('Should be able to find a device by id', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest({
      params: {
        id: 1
      }
    })
    let responseObj = {}
    const devicesPromise = await deviceController.findOne(request, response)
    responseObj = devicesPromise._getJSON()
    expect(responseObj.statusCode).toBe(200)
    expect(responseObj.data.id).toBe(1)
  })
  it('Should be able to delete a device by id', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest({
      params: {
        id: 2
      }
    })
    let responseObj = {}
    const devicesPromise = await deviceController.delete(request, response)
    responseObj = devicesPromise._getJSON()
    expect(responseObj.statusCode).toBe(200)
  })
  it('Should be able to update a device by id giving the name', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest({
      params: { id: 2 },
      body: { color: 'black' }
    })
    let responseObj = {}
    const devicesPromise = await deviceController.update(request, response)
    responseObj = devicesPromise._getJSON()
    expect(responseObj.statusCode).toBe(201)
    expect(responseObj.data.id).toBe(2)
    expect(responseObj.data.color).toEqual('black')
  })
})
