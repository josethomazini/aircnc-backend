import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const mongoStrConn = process.env.MONGO_STR_CONNECTION || 'NO-DATA';

export {
  port, mongoStrConn,
};
