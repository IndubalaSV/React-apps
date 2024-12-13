import React from "react";

function Card(props) {
  return (
    <div className="card">
      {/* <div className='openSpots'>{props.openSpots === 0 ? 'SOLD OUT' : `${props.openSpots} spots left`}</div> */}
      {props.openSpots === 0 ? (
        <div className="openSpots">SOLD OUT</div>
      ) : (
        props.online && <div className="openSpots">ONLINE</div>
      )}
      <img
        src={props.image ? `/images/${props.image}` : "images/swimming.jpg"}
        className="cardimg"
        alt="airbnb"
      />
      <div className="cardcontent">
        <p>⭐{props.rating || 5.0}</p>
        <p>{props.text || "Life lessons with Katie Zaferes"}</p>
        <p>From {props.price || "$136"}/ person</p>
      </div>
    </div>
  );
}

export default Card;
