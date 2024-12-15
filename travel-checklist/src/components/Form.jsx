import React from "react";

export default function Form(props) {
  let { items, setItems } = props;
  let [description, setDescription] = React.useState("");
  let [quantity, setQuantity] = React.useState(1);
  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    let newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    setItems([...items, newItem]);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
