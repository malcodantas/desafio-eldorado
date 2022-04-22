const express = require('express')
const { routes } = require('./routes')
const ErrorHandler = require('./shared/middleware/ErrorHandler')
const AuthHandler = require('./shared/middleware/AuthHandler')
const PORT = 3000
const { userRoutes } = require('./routes/user.routes')

const sequelize = require('./database')

// verify if connection with mysql database is up
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
}).catch(err => {
  console.error('Unable to connect to the database:', err)
})

const app = express()
app.use(express.json())
app.use('/login', userRoutes)
app.use(AuthHandler)
app.use(routes)
app.use(ErrorHandler)

app.listen(PORT, () => {
  console.log(`API running on: http://127.0.0.1:${PORT}`)
})
