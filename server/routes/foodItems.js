const express = require('express');
const router = express.Router();
const { getFoodItems, addFoodItem, deleteFoodItem } = require('../controllers/foodItems');

router
  .route('/')
  .get(getFoodItems)
  .post(addFoodItem);

router
  .route('/:id')
  .delete(deleteFoodItem);

module.exports = router;
