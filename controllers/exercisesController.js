const { getUserExercisesDB, addExerciseDB, getExerciseDB } = require('../model/Exercises')
const { getUserDB } = require('../model/Users')
const { HttpError } = require('../errors/httpError.js')
const moment = require('moment')

const getUserExercises = async (req, res, next) => {
  const user = await getUserDB(req.params._id)
  if (!user) return next(new HttpError({ message: `User with id ${req.params._id} doesn't exist`, code: 400 }))

  let exercises
  try {
    exercises = await getUserExercisesDB(req.params._id)
  } catch (err) {
    return next(new HttpError({ message: err.message, code: 500 }))
  }
  res.json(exercises)
}

const addExercise = async (req, res, next) => {
  const { description, duration, date } = req.body
  const authorId = req.params._id

  if (date && !moment(date, 'YYYY-MM-DD', true).isValid())
    return next(new HttpError({ message: `date in incorrect`, code: 400 }))

  const user = await getUserDB(authorId)
  if (!user) return next(new HttpError({ message: `User with id ${authorId} doesn't exist`, code: 400 }))

  let insertedId
  try {
    insertedId = (await addExerciseDB(description, +duration, date ? date : moment().format('YYYY-MM-DD'), +authorId))
      .lastID
  } catch (err) {
    return next(new HttpError({ message: err.message, code: 500 }))
  }

  const insertedExercise = await getExerciseDB(insertedId)
  res.json(insertedExercise)
}

module.exports = {
  getUserExercises,
  addExercise,
}
