const { Router } = require('express')
const { getAllUsers, addUser } = require('../../controllers/usersController')

const router = Router()

router.get('/api/users', getAllUsers)
router.post('/api/users', addUser)

module.exports = { usersRouter: router }
