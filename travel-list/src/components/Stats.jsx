import React from "react";

export default function Stats(props) {
  if (props.items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  let items = props.items;
  let numItems = items.length;
  let numPacked = items.filter((item) => item.packed).length;
  let percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "🎉 You are all set to go! 🎉"
          : `👜 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
