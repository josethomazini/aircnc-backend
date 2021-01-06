import express from 'express';

import mongoose from 'mongoose';

import { port, mongoStrConn } from './configs/varEnvs';
import routes from './routes';

const app = express();

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(mongoStrConn, mongooseOptions);

app.use(express.json());
app.use(routes);

app.listen(port);
