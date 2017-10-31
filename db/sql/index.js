const { readFileSync: open } = require('fs');
const { join } = require('path');

const sql = relativePath => open(join(__dirname, relativePath), { encoding: 'utf8' });

module.exports = {
  iceBreakerResponses: {
    add: sql('./iceBreakerResponses/add.sql'),
    create: sql('./iceBreakerResponses/create.sql'),
    findAllByIceBreakerID: sql('./iceBreakerResponses/findAllByIceBreakerID.sql'),
    findBySecret: sql('./iceBreakerResponses/findBySecret.sql'),
    updateResponse: sql('./iceBreakerResponses/updateResponse.sql')
  }
};
