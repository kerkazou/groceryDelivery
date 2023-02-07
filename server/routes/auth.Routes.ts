const router = require('express').Router();

const Auth = require('../controllers/Auth')

router.get('/login', Auth.Login);

module.exports = router;