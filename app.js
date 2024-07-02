
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tokenRoutes = require('./routes/tokenRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const paramRoutes = require('./routes/paramRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/tokens', tokenRoutes);
app.use('/quotes', quoteRoutes);
app.use('/params', paramRoutes);

module.exports = app;
