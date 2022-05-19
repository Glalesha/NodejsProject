const { Router } = require('express')
const { getUserExercises, addExercise } = require('../../controllers/exercisesController')

const router = Router()

router.get('/api/users/:_id/exercises', getUserExercises)
router.post('/api/users/:_id/exercises', addExercise)

module.exports = { exercisesRouter: router }
