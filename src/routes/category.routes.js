
const { Router } = require('express')
const resolver = require('../shared/utils/Resolver')

const { CategoryController } = require('../controllers/CategoryController')
const CategoryRepository = require('../repositories/CategoryRepository')
const Category = require('../models/category')

const categoryRepository = new CategoryRepository(Category)
const categoryController = new CategoryController(categoryRepository)
const categoryRoutes = Router()

categoryRoutes.get('/', resolver(categoryController.list))

categoryRoutes.get('/:id', resolver(categoryController.findOne))

categoryRoutes.post('/', resolver(categoryController.create))

categoryRoutes.put('/:id', resolver(categoryController.update))

categoryRoutes.delete('/:id', resolver(categoryController.delete))
module.exports = { categoryRoutes }
