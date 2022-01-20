import Total from "./Total"
import FoodList from "./FoodList";
import AddFood from "./AddFood";

const Home = () => {
    return (
        <div className="container">
            <Total />
            <FoodList />
            <AddFood />
        </div>
    )
}

export default Home;
