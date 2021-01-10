import dotenv from 'dotenv';

dotenv.config();

const DEFAULT_PORT = 3000;

const readPort = (): number => {
  if (process.env.PORT === undefined) {
    return DEFAULT_PORT;
  }
  return parseInt(process.env.PORT, 10);
};

const readMongoStrConnection = (): string => {
  if (process.env.MONGO_STR_CONNECTION === undefined) {
    throw Error('No mongo str connection found');
  }
  return process.env.MONGO_STR_CONNECTION;
};

export const port: number = readPort();
export const mongoStrConn: string = readMongoStrConnection();
