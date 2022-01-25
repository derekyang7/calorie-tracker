import { createContext, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  foodItems: [],
  error: null,
  loading: true
}

export const GlobalContext = createContext(initialState);

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'GET_FOOD_ITEM':
      return {
        ...state,
        loading: false,
        foodItems: action.payload
      }
    case 'ADD_FOOD_ITEM':
      return {
        ...state,
        foodItems: [...state.foodItems, action.payload]
      }
    case 'DELETE_FOOD_ITEM':
      return {
        ...state,
        foodItems: state.foodItems.filter(food => food._id !== action.payload)
      }
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  async function getFoodItems() {
    try {
      const res = await axios.get('/api/fooditems');
      dispatch({
        type: 'GET_FOOD_ITEM',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addFoodItem(food) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/fooditems', food, config);
      dispatch({
        type: 'ADD_FOOD_ITEM',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteFoodItem(id) {
    try {
      await axios.delete(`/api/fooditems/${id}`)
      dispatch({
        type: 'DELETE_FOOD_ITEM',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (
    <GlobalContext.Provider value={{
      foodItems: state.foodItems,
      error: state.error,
      loading: state.loading,
      getFoodItems,
      addFoodItem,
      deleteFoodItem
    }}>
      {children}
    </GlobalContext.Provider>);
}
