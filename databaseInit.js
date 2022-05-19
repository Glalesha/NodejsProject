const database = require('sqlite-async')

const db = {
  instance: null,
}

const initDB = () => {
  database
    .open('./my.db')
    .then((res) => {
      db.instance = res
      db.instance
        .exec(
          `
CREATE TABLE IF NOT EXISTS Users (
	_id INTEGER NOT NULL,
	username VARCHAR(255),
  PRIMARY KEY (_id)
);

CREATE TABLE IF NOT EXISTS Exercises (
	_id INTEGER NOT NULL,
	description VARCHAR(255),
  duration INTEGER, 
  date DATE,
  authorId INTEGER NOT NULL,
  PRIMARY KEY (_id)
);
`,
        )
        .then(() => {})
        .catch((err) => console.log('exec err', err))
    })
    .catch((err) => console.log('open err', err))
}

initDB()

module.exports = { db }
