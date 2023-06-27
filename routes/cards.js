const cardrouter = require('express').Router();
const {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

cardrouter.get('/', getCards);
cardrouter.delete('/:cardId', deleteCard);
cardrouter.post('/', createCard);
cardrouter.put('/:cardId/likes', likeCard);
cardrouter.delete('/:cardId/likes', dislikeCard);
module.exports = cardrouter;
