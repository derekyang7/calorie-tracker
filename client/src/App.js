import React from "react";
import logo from './logo.svg';
import './App.css';
import myNavbar from "./components/myNavbar";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import AddFood from "./components/AddFood";
import Total from "./components/Total"

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (

    <div className="App">
      <Header />
      <AddFood />
      <FoodList />
      <Total />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{!data ? "Loading..." : data}</p>
      </header> */}
    </div>
  );
}

export default App;
