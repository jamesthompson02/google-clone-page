const express = require('express')
const app = express()
const cors = require('cors');

const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

const resultRoutes = require('./controllers/results');

app.use('/search', resultRoutes);

module.exports = app;