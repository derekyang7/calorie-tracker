import axios from 'axios';

export const getCalories = async (foodName) => {
  const edamamId = 'c897eb3a';
  const edamamKey = '26dbdeee1da018051d4cc30778a978d1';
  const edamamUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${edamamId}&app_key=${edamamKey}&ingr=${foodName}`;
  console.log(edamamUrl);
  try {
    const res = await axios.get(edamamUrl);
    return res.data.hints[0].food.nutrients.ENERC_KCAL;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
