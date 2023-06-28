const router = require('express').Router();
const userrouter = require('./users');
const cardrouter = require('./cards');

router.use('/users', userrouter);
router.use('/cards', cardrouter);

module.exports = router;
