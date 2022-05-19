const { db } = require('../databaseInit.js')

const getUserExercisesDB = async (userId) => {
  return db.instance.all(`SELECT * FROM Exercises WHERE authorId = ?`, userId)
}

const addExerciseDB = async (description, duration, date, authorId) => {
  return db.instance.run(`INSERT INTO Exercises (description, duration, date, authorId) VALUES(?,?,?,?)`, [
    description,
    duration,
    date,
    authorId,
  ])
}

const getExerciseDB = async (exerciseId) => {
  return db.instance.get(`SELECT * FROM Exercises WHERE _id = ?`, exerciseId)
}

module.exports = { getUserExercisesDB, addExerciseDB, getExerciseDB }
