import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Total = () => {
    const { foodItems } = useContext(GlobalContext);
    const calories = foodItems.map(foodItem => foodItem.calories);
    const totalCalories = calories.reduce((acc, cal) => (acc += cal), 0).toFixed(2);

    return (
        <div>
            <h3>Total Calories Consumed</h3>
            <h1>{totalCalories}</h1>
        </div>

    )
}

export default Total;
