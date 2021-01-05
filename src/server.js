const express = require('express');
const mongoose = require('mongoose');

const { port, mongoStrConn } = require('./configs/varEnvs');
const routes = require('./routes');

const app = express();

mongoose.connect(
  mongoStrConn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.use(express.json());
app.use(routes);

app.listen(port);
