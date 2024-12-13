import "./App.css";
import Card from "./Card";
import Navbar from "./Navbar";
import data from "./data";

function App() {
  let cardListCards = data.map((card) => {
    return <Card {...card} />;
  });
  return (
    <div className="App">
      <Navbar />
      <img src="images/heroimg.jpeg" className="heroimg" alt="airbnb" />
      <div className="herocontent">
        <h1>Online experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
      <div className="cards">{cardListCards}</div>
    </div>
  );
}

export default App;
