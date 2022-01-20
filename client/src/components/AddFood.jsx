import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddFood = () => {
    const [foodItem, setFoodItem] = useState('');
    const [amount, setAmount] = useState('');

    const { addFoodItem } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        setFoodItem('');
        setAmount(0);

        const newFood = {
            id: Math.floor(Math.random() * 100000000),
            foodItem: foodItem,
            amount: +amount
        }

        addFoodItem(newFood);

    }
    return (
        <>
            <h3>Add New Food</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Food Item</label>
                    <input type="text" placeholder="Enter food item..." value={foodItem} onChange={(e) => setFoodItem(e.target.value)} required />
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
