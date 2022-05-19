const { db } = require('../databaseInit.js')

const getAllUsersDB = () => {
  return db.instance.all(`SELECT * FROM Users`)
}

const addUserDB = (username) => {
  return db.instance.run(`INSERT INTO Users (username) VALUES(?)`, username)
}

const getUserDB = (userId) => {
  return db.instance.get(`SELECT * FROM Users WHERE _id = ?`, userId)
}

const getUserByNameDB = (username) => {
  return db.instance.get(`SELECT * FROM Users WHERE username = ?`, username)
}

module.exports = { getAllUsersDB, addUserDB, getUserDB, getUserByNameDB }
