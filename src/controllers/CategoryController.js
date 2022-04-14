const CategoryRepository = require('../repositories/CategoryRepository')
const Category = require('../models/category')
const VerifyMandatoryParams = require('../shared/utils/VerifyMandatoryParams')
class CategoryController {
  constructor (repository) {
    this.repository = repository
  }

  create = async (request, response)=> {
    VerifyMandatoryParams(['name'], request.body)
    const { name } = request.body
    const createdCategory = await this.repository.create({ name })
    return response.status(201).json({ statusCode: 201, data: createdCategory })
  }

  list = async (request, response) => {
    const allCategoriesObj =  await this.repository.getAll()
    return response.status(200).json({ statusCode: 200, data: allCategoriesObj })
  }

  delete = async (request, response)=> {
    const id = request.params.id
    await this.repository.delete(id)
    return response.status(200).json({ statusCode: 200 })
  }

  update = async (request, response) =>{
    const category = {
      ...request.body,
      id: request.params.id
    }
    const updatedCategory = await this.repository.update(category)
    return response.status(200).json({ statusCode: 200, data: updatedCategory })
  }

  findOne = async (request, response)=> {
    const id = request.params.id
    const categoryObj = await this.repository.getById(id)
    return response.status(200).json({ statusCode: 200, data: categoryObj })
  }
}

module.exports = { CategoryController }
