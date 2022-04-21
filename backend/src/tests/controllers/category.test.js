const { CategoryController } = require('../../controllers/CategoryController')
const { FakeCategoryRepository } = require('../../repositories/mocks/FakeCategoryRepository')
const MockExpressRequest = require('mock-express-request')
const MockExpressResponse = require('mock-express-response')
const MissingParamError = require('../../shared/errors/MissingParamError')

describe('CategoryController', () => {
  let categoryController
  let fakeCategoryRepository
  beforeEach(() => {
    fakeCategoryRepository = new FakeCategoryRepository()
    categoryController = new CategoryController(fakeCategoryRepository)
  })
  it('Should be able to list categories', () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest()
    const categoriesPromise = categoryController.list(request, response)
    let responseObj = {}
    categoriesPromise.then((response) => {
      responseObj = response._getJSON()
      expect(responseObj.statusCode).toBe(200)
      expect(responseObj.data).toEqual([{ id: 1, name: 'mockCategory 1' }, { id: 2, name: 'mockCategory 2' }])
    }).catch((error) => { console.error(error) })
  })
  it('Should be able to create a category', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest({
      body: {
        name: 'new category'
      }
    })
    // create a new category
    const categoriesPromise = await categoryController.create(request, response)
    let responseObj = {}
    responseObj = categoriesPromise._getJSON()

    // verify if the new category was created
    expect(responseObj.statusCode).toBe(201)
    expect(responseObj.data.name).toEqual('new category')
    expect(responseObj.data).toHaveProperty('id')
  })
  it('Should not be able to create a category without a name', async () => {
    const response = new MockExpressResponse()
    // send an empty body
    const request = new MockExpressRequest({
      body: {
      }
    })
    await expect(categoryController.create(request, response))
      .rejects.toThrow(MissingParamError)
  })
  it('Should be able to find a category by id', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest({
      params: {
        id: 2
      }
    })
    let responseObj = {}
    const categoriesPromise = await categoryController.findOne(request, response)
    responseObj = categoriesPromise._getJSON()
    expect(responseObj.statusCode).toBe(200)
    expect(responseObj.data.id).toBe(2)
  })
  it('Should be able to delete a category by id', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest({
      params: {
        id: 2
      }
    })
    let responseObj = {}
    const categoriesPromise = await categoryController.delete(request, response)
    responseObj = categoriesPromise._getJSON()
    expect(responseObj.statusCode).toBe(200)
  })
  it('Should be able to update a category by id giving the name', async () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest({
      params: { id: 2 },
      body: { name: 'updated name' }
    })
    let responseObj = {}
    const categoriesPromise = await categoryController.update(request, response)
    responseObj = categoriesPromise._getJSON()
    expect(responseObj.statusCode).toBe(200)
    expect(responseObj.data.id).toBe(2)
    expect(responseObj.data.name).toEqual('updated name')
  })
})
