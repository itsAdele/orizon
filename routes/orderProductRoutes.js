const express = require('express');
const router = express.Router();
const orderProductController = require('../controllers/orderProductController');


router.post('/', orderProductController.addProductToOrder);
router.get('/:order_id', orderProductController.getOrderDetails);
router.delete('/:order_id/:product_id', orderProductController.deleteRemoveProduct);

module.exports = router;