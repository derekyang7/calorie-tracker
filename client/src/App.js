import React from "react";
import './App.css';
import AddFood from "./components/AddFood";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import Total from "./components/Total"

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (

    <div className="App">
      <Header />
      <div className="container">
        <Total />
        <FoodList />
        <AddFood />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{!data ? "Loading..." : data}</p>
      </header> */}
    </div>
  );
}

export default App;
