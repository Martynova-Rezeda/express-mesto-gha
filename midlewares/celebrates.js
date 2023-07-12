const { celebrate, Joi } = require('celebrate');
const { regexAvatarLink, regexLink } = require('../utils/constats');

const login = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const createUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(regexAvatarLink),
  }),
});

const getUser = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
});

const updateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

const updateAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().regex(regexAvatarLink),
  }),
});

const createCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(regexLink),
  }),
});

const checkCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24),
  }),
});

module.exports = {
  login, createUser, getUser, updateUser, updateAvatar, createCard, checkCardId,
};
