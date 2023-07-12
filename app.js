const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const userrouter = require('./routes/users');
const cardrouter = require('./routes/cards');
const celebrates = require('./midlewares/celebrates');
const auth = require('./midlewares/auth');
const NotFoundError = require('./errors/NotFoundError');
const { login, createUser } = require('./controllers/users');
const centralError = require('./midlewares/centralError');

const { PORT = 3000 } = process.env;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.post('/signin', celebrates.login, login);
app.post('/signup', celebrates.createUser, createUser);

app.use(auth);

app.use('/users', userrouter);
app.use('/cards', cardrouter);
app.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});
app.use(errors());
app.use(centralError);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
