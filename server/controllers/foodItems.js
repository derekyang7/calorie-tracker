const FoodItem = require('../models/FoodItem');

exports.getFoodItems = async (req, res, next) => {
  try {
    const foodItems = await FoodItem.find();

    return res.status(200).json({
      success: true,
      count: foodItems.length,
      data: foodItems
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

exports.addFoodItem = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const foodItem = await FoodItem.create(req.body);

    return res.status(201).json({
      success: true,
      data: foodItem
    });
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      }); 
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

exports.deleteFoodItem = async (req, res, next) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id);

    if(!foodItem) {
      return res.status(404).json({
        success: false,
        error: 'No foodItem found'
      });
    }

    await foodItem.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}
