const cardrouter = require('express').Router();
const {
  createCard, getCards, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');
const celebrates = require('../midlewares/celebrates');

cardrouter.get('/', getCards);
cardrouter.delete('/:cardId', celebrates.checkCardId, deleteCard);
cardrouter.post('/', celebrates.createCard, createCard);
cardrouter.put('/:cardId/likes', celebrates.checkCardId, likeCard);
cardrouter.delete('/:cardId/likes', celebrates.checkCardId, dislikeCard);
module.exports = cardrouter;
