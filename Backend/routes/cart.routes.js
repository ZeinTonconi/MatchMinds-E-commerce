const { Router } = require('express');
const { addToCart, getCartContents } = require('../controllers/cart.controller');

const router = Router();

router.post('/agregar', addToCart);

router.get('/contenido', getCartContents);

module.exports = router;