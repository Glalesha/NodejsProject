const { getAllUsersDB, addUserDB, getUserByNameDB } = require('../model/Users')
const { HttpError } = require('../errors/httpError.js')

const getAllUsers = async (req, res, next) => {
  let allUsers
  try {
    allUsers = await getAllUsersDB()
  } catch (err) {
    next(new HttpError({ message: err.message, code: 500 }))
  }

  res.json(allUsers)
}

const addUser = async (req, res, next) => {
  const foundUser = await getUserByNameDB(req.body.username)
  if (foundUser) return next(new HttpError({ message: 'user already exists', code: 400 }))

  let insertedId
  try {
    insertedId = (await addUserDB(req.body.username)).lastID
  } catch (err) {
    next(err)
  }

  res.json({ _id: insertedId, username: req.body.username })
}

module.exports = {
  getAllUsers,
  addUser,
}
