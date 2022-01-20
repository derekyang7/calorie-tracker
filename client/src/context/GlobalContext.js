import { createContext, useReducer } from 'react';

const initialState = {
  foods: [{
    id: 1,
    foodItem: 'Carrot',
    amount: 1
  },
  {
    id: 2,
    foodItem: 'Celery',
    amount: 2
  },
  {
    id: 3,
    foodItem: 'Donut',
    amount: 3
  }]
}

export const GlobalContext = createContext(initialState);

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FOOD_ITEM':
      return {
        ...state,
        foods: [action.payload, ...state.foods]
      }
    case 'DELETE_FOOD_ITEM':
      return {
        ...state,
        foods: state.foods.filter(food => food.id !== action.payload)
      }
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  function addFoodItem(food) {
    dispatch({
      type: 'ADD_FOOD_ITEM',
      payload: food
    });
  }

  function deleteFoodItem(id) {
    dispatch({
      type: 'DELETE_FOOD_ITEM',
      payload: id
    });
  }

  return (
    <GlobalContext.Provider value={{
      foods: state.foods,
      addFoodItem,
      deleteFoodItem
    }}>
      {children}
    </GlobalContext.Provider>);
}
