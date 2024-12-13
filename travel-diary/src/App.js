import './App.css';
import data from './data.js';
import Card from './Card.js';

let cardList = data.map((item) => {
  return (
    <Card { ...item } />
  )
})
function App() {
  return (
    <div className="App">
      <h1 className="title">My Travel Diary</h1>
      {cardList}
    </div>
  );
}

export default App;
