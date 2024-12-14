import React, { useState, useEffect } from "react";
import "./index.css";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import Logo from "./components/Logo";
import Form from "./components/Form";
function App() {
  // Load items from local storage
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  // Save items to local storage whenever items state changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  let handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  let handleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  let handleSort = (sortType) => {
    let sortedItems = [...items];
    switch (sortType) {
      case "quantity":
        sortedItems.sort((a, b) => a.quantity - b.quantity);
        break;
      case "description":
        sortedItems.sort((a, b) => a.description.localeCompare(b.description));
        break;
      case "packed status":
        sortedItems.sort((a, b) => b.packed - a.packed);
        break;
      default:
        return;
    }
    setItems(sortedItems);
  };
  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList
        items={items}
        setItems={setItems}
        handleDeleteItem={handleDeleteItem}
        handleCheck={handleCheck}
        handleSort={handleSort}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
