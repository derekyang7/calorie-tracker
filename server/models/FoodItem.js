const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add a food name']
  },
  amount: {
    type: Number,
    min: [1, 'Please add a positive number'],
    required: [true, 'Please add a number']
  },
  calories: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FoodItem', FoodItemSchema);
