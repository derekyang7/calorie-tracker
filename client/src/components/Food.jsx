import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Food = ({ food }) => {
    const { deleteFoodItem } = useContext(GlobalContext);

    return (
        <li>
            {food.foodItem}: {food.amount}
            <button className="delete" onClick={() => deleteFoodItem(food.id)}>x</button>
        </li>
    )
}

export default Food;
