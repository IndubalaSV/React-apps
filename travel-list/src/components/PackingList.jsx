import React from "react";
function Item(props) {
  let item = props.item;
  let quantity = item.quantity > 1 ? `${item.quantity}` : "";
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => props.handleCheck(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {item.description}
      </span>
      <button onClick={() => props.handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
export default function PackingList(props) {
  let { items, handleSort } = props;
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={props.handleDeleteItem}
            handleCheck={props.handleCheck}
          />
        ))}
      </ul>
      <div className="actions">
        <button
          onClick={() => {
            let confirm = window.confirm(
              "Are you sure you want to clear the list?"
            );
            if (confirm) {
              props.setItems([]);
            }
          }}
        >
          Clear List
        </button>
        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="none" disabled selected>
            Sort by
          </option>
          <option value="quantity">Quantity</option>
          <option value="description">Description</option>
          <option value="packed status">Packed Status</option>
        </select>
      </div>
    </div>
  );
}
