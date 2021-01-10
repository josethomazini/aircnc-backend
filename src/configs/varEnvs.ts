import dotenv from 'dotenv';

dotenv.config();

const DEFAULTS = {
  PORT: 3000,
  NODE_ENV: 'development',
};

const readPort = (): number => {
  if (process.env.PORT === undefined) {
    return DEFAULTS.PORT;
  }
  return parseInt(process.env.PORT, 10);
};

const readMongoStrConnection = (): string => {
  if (process.env.MONGO_STR_CONNECTION === undefined) {
    throw Error('No mongo str connection found');
  }
  return process.env.MONGO_STR_CONNECTION;
};

const readNodeEnv = (): string => {
  if (process.env.NODE_ENV === undefined) {
    return DEFAULTS.NODE_ENV;
  }
  return process.env.NODE_ENV;
};

export const mongoStrConn: string = readMongoStrConnection();
export const nodeEnv: string = readNodeEnv();
export const port: number = readPort();
