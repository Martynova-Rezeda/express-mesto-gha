const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const NOT_FOUND_ERROR = 404;

const { PORT = 3000 } = process.env;
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
app.use((req, res, next) => {
  req.user = {
    _id: '64958d8855c4d4f78a6a755c',
  };

  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use('*', (req, res) => {
  res.status(NOT_FOUND_ERROR).send({ message: 'Некорректные данные' });
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
