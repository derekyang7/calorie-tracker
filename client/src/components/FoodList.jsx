import { useContext, useEffect } from 'react';
import Food from './Food';
import { GlobalContext } from '../context/GlobalContext';

const FoodList = () => {
    const { foodItems, getFoodItems } = useContext(GlobalContext);

    useEffect(() => {
        getFoodItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h3>Food List</h3>
            <ul className="foodList">
                {foodItems.map(foodItem => <Food key={foodItem._id} foodItem={foodItem} />)}
            </ul>
        </div>

    )
}

export default FoodList;
