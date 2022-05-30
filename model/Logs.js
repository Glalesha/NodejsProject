const { db } = require('../databaseInit.js')

const getUserLogsDB = async (_id, from, to, limit) => {
  let dateClause
  if (from === undefined && to === undefined) {
    dateClause = ''
  } else if (from !== undefined && to !== undefined) {
    dateClause = `AND (date BETWEEN '${from}' AND '${to}')`
  } else if (from !== undefined && to === undefined) {
    dateClause = `AND date >= '${from}'`
  } else if (from === undefined && to !== undefined) {
    dateClause = `AND date <= '${to}'`
  }

  const limitClause = Number.isNaN(limit) ? '' : 'LIMIT ' + limit

  return db.instance.all(`SELECT * FROM Exercises WHERE authorId = ? ${dateClause} ${limitClause}`, [_id])
}

const getLogsCountDB = async (_id) => {
  return db.instance.get(`SELECT COUNT(*) as count FROM Exercises WHERE authorId = ?`, _id)
}

module.exports = { getUserLogsDB, getLogsCountDB }
