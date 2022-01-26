import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Food = ({ foodItem }) => {
    const { deleteFoodItem } = useContext(GlobalContext);

    return (
        <li>
            {foodItem.text} ({foodItem.amount}): {foodItem.calories}
            <button className="delete" onClick={() => deleteFoodItem(foodItem._id)}>x</button>
        </li>
    )
}

export default Food;
