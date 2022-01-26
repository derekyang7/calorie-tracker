import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { getCalories } from "../api";

const AddFood = () => {
    const [foodName, setFoodName] = useState('');
    const [amount, setAmount] = useState('');

    const { addFoodItem } = useContext(GlobalContext);

    const onSubmit = async e => {
        e.preventDefault();

        setFoodName('');
        setAmount(0);

        const caloriesPerServing = await getCalories(foodName);
        const totalCalories = (caloriesPerServing * amount).toFixed(2);
        const newFood = {
            text: foodName,
            amount: +amount,
            calories: totalCalories
        }

        addFoodItem(newFood);
    }

    return (
        <>
            <h3>Add New Food</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Food Name</label>
                    <input type="text" placeholder="Enter food name..." value={foodName} onChange={(e) => setFoodName(e.target.value)} required />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Number of Servings</label>
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </div>
                <button className="btn">Add Food</button>
            </form>
        </>
    )
}

export default AddFood;
