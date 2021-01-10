import express from 'express';
import mongoose from 'mongoose';

import { port, mongoStrConn } from '@configs/varEnvs';
import logger from '@services/logger';
import routes from '@src/routes';

process.on('uncaughtException', (err) => {
  logger.error('There was an uncaught error', err);
  process.exit(1);
});

const app = express();

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(mongoStrConn, mongooseOptions);

app.use(express.json());
app.use(routes);

app.listen(port);
logger.info(`Listening on port ${port}`);
