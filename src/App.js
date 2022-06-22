import AthleteData from "./athletes.json";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import "./app.scss";

function App() {
  const [order, setOrder] = useState("newest");

  let reverseData = () => {
    AthleteData.reverse();
    setOrder(order === "newest" ? "oldest" : "newest");
  };

  useEffect(() => {}, [order]);
  return (
    <div className="App">
      <div className="heading">
        <h1>upcoming drops</h1>
        <div className="heading__sort">
          <p>Sort By</p>
          <select onChange={reverseData}>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <Cards />
    </div>
  );
}

export default App;
