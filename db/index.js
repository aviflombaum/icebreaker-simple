const sqlite3 = require('sqlite3').verbose();

const repos = require('./repos');

// open the database
let db = new sqlite3.Database('./db/development.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the icebreaker-simple database.');
});

db.repos = {
  iceBreakerResponses: new repos.IceBreakerResponse
};

module.exports = db;
