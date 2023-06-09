import React, { useState } from "react";

function ListingCard({ listing, onDeleteClick }) {

  const [fave, setFave] = useState(false);

  function handleFaveClick() {
    setFave(!fave);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {fave ? (
          <button className="emoji-button favorite active" onClick={handleFaveClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFaveClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => onDeleteClick(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
