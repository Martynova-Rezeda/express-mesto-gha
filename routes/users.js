const userrouter = require('express').Router();
const {
  getUsers, getUser, updateUser, updateAvatar,
} = require('../controllers/users');
const celebrates = require('../midlewares/celebrates');

userrouter.get('/', getUsers);
userrouter.get('/me', getUser);
userrouter.get('/:userId', celebrates.getUser, getUser);
userrouter.patch('/me', celebrates.updateUser, updateUser);
userrouter.patch('/me/avatar', celebrates.updateAvatar, updateAvatar);
module.exports = userrouter;
