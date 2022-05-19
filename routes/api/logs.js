const { Router } = require('express')
const { logsController } = require('../../controllers/logsController')

const router = Router()

router.get('/api/users/:_id/logs', logsController)

module.exports = { logsRouter: router }
