const { exercisesRouter } = require('./api/exercises')
const { logsRouter } = require('./api/logs')
const { usersRouter } = require('./api/users')
const { indexPageRouter } = require('./pages/index')
const { Router } = require('express')

const router = Router()
router.use(logsRouter)
router.use(exercisesRouter)
router.use(usersRouter)
router.use(indexPageRouter)

module.exports = { router }
