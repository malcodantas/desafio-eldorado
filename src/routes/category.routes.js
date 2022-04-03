
const { Router } = require('express')
const CategoryRepository = require('../repositories/CategoryRepository')

const categoryRoutes = Router()

categoryRoutes.get('/', async (request, response) => {
  const categoryRepository = new CategoryRepository()
  const allCategoriesObj = await categoryRepository.getAll()
  response.json(allCategoriesObj)
})

categoryRoutes.get('/:id', async (request, response) => {
  const categoryRepository = new CategoryRepository()
  const id = request.params.id
  const categoryObj = await categoryRepository.getById(id)
  response.json(categoryObj)
})

categoryRoutes.post('/', async (request, response) => {
  const categoryRepository = new CategoryRepository()
  const { name } = request.body
  const createdCategory = await categoryRepository.create({ name })
  response.json(createdCategory)
})

categoryRoutes.put('/:id', async (request, response) => {
  const categoryRepository = new CategoryRepository()
  const category = {
    ...request.body,
    id: request.params.id
  }
  const updatedCategory = await categoryRepository.update(category)
  response.json(updatedCategory)
})

categoryRoutes.delete('/:id', async (request, response) => {
  const categoryRepository = new CategoryRepository()
  const id = request.params.id
  const deletedCategory = await categoryRepository.delete(id)
  if (deletedCategory.deletedCategory === 1) {
    response.status(200)
    response.json({ id: deletedCategory.id, msg: 'Device excluido com sucesso' })
  } else {
    response.status(500)
    response.json({ id: deletedCategory.id, msg: 'Não foi possível excuir o device ou device não existe' })
  }
})
module.exports = { categoryRoutes }
