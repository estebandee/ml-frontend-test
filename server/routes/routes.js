const express = require('express');

const router = express.Router();
const ItemsController = require('../controllers/items.js');

router.get('/items', ItemsController.getItemList);
router.get('/items/:id', ItemsController.getItemDetails);

module.exports = router;
