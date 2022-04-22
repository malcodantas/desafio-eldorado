
const { Router } = require('express')
const resolver = require('../shared/utils/Resolver')

const { UserController } = require('../controllers/UserController')
const UserRepository = require('../repositories/UserRepository')
const User = require('../models/user')

const userRepository = new UserRepository(User)
const userController = new UserController(userRepository)

const userRoutes = Router()

userRoutes.post('/', resolver(userController.auth))

module.exports = { userRoutes }
