const { getUserLogsDB, getLogsCountDB } = require('../model/Logs')
const { HttpError } = require('../errors/httpError.js')

const logsController = async (req, res, next) => {
  let logs
  let count

  try {
    logs = await getUserLogsDB(req.params._id, req.query.from, req.query.to ? req.query.to : null, +req.query.limit)
  } catch (err) {
    return next(new HttpError({ message: err.message, code: 500 }))
  }

  try {
    count = (await getLogsCountDB(req.params._id)).count
  } catch (err) {
    return next(new HttpError({ message: err.message, code: 500 }))
  }

  res.json({ exercises: logs, count })
}

module.exports = {
  logsController,
}
