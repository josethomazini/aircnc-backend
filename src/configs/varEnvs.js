const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  mongoStrConn: process.env.MONGO_STR_CONNECTION || 'NO-DATA',
};
