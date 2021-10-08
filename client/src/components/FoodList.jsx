const FoodList = () => {
    const foods = [
        {
            id: 1,
            name: 'Carrot',
        },
        {
            id: 2,
            name: 'Celery',
        },
        {
            id: 3,
            name: 'Donut',
        }
    ];
    return (
        <div>
            <h3>Food List</h3>
            <ul>
                {foods.map(food => {
                    return <li>{food.name}</li>;
                })}
            </ul>
        </div>

    )
}

export default FoodList
