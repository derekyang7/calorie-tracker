import { useContext } from 'react';
import Food from './Food';
import { GlobalContext } from '../context/GlobalContext';

const FoodList = () => {
    const { foods } = useContext(GlobalContext);

    return (
        <div>
            <h3>Food List</h3>
            <ul className="foodList">
                {foods.map(food => <Food key={food.id} food={food} />)}
            </ul>
        </div>

    )
}

export default FoodList;
