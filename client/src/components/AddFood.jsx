const AddFood = () => {
    return (
        <>
            <h3>Add New Food</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Food Item</label>
                    <input type="text" placeholder="Enter food item..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Number of Servings</label>
                    <input type="number" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add Food</button>
            </form>
        </>
    )
}

export default AddFood
