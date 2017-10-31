const sql = require('../sql').iceBreakerResponses;
const IceBreakerResponse = require('../../models/IceBreakerResponse');

const rowToIceBreakerResponse = row => {
  const response = new IceBreakerResponse(row.iceBreakerID, row.questionID, row.email, row.secret);

  response.id = row.id;

  return response;
};

class IceBreakerResponseRepo {
  constructor(db) {
    this.db = db;
  }

  create() {
    return this.db.run(sql.create);
  }

  add(iceBreakerID, questionID, email, secret) {
    return this.db.get(sql.add, [ iceBreakerID, questionID, email, secret ], (err, row) => {
      if (err) return err;

      return row;
    });
  }

  updateResponse(id, text) {
    return this.db.get(sql.updateResponse, [ text, id ], (err, row) => {
      if (err) return err;

      return row;
    });
  }

  findAllByIceBreakerID(id) {
    return this.db.all(sql.findAllByIceBreakerID, [ id ], (err, rows) => {
      if (err) return err;

      return rows.map(rowToIceBreakerResponse);
    });
  }

  findBySecret(secret) {
    return this.db.get(sql.findBySecret, [ secret ], (err, row) => {
      if (err) return err;

      return rowToIceBreakerResponse(row);
    });
  }
}

module.exports = IceBreakerResponseRepo;
