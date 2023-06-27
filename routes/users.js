const userrouter = require('express').Router();
const {
  createUser, getUsers, getUser, updateUser, updateAvatar,
} = require('../controllers/users');

userrouter.get('/', getUsers);
userrouter.get('/:userId', getUser);
userrouter.post('/', createUser);
userrouter.patch('/me', updateUser);
userrouter.patch('/me/avatar', updateAvatar);
module.exports = userrouter;
