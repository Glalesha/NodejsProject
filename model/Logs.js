const { db } = require('../databaseInit.js')

const getUserLogsDB = async (_id, from, to, limit) => {
  return db.instance.all(`SELECT * FROM Exercises WHERE authorId = ? AND (date BETWEEN ? AND ?) LIMIT ?`, [
    _id,
    from,
    to,
    limit,
  ])
}

const getLogsCountDB = async (_id) => {
  return db.instance.get(`SELECT COUNT(*) as count FROM Exercises WHERE authorId = ?`, _id)
}

module.exports = { getUserLogsDB, getLogsCountDB }
