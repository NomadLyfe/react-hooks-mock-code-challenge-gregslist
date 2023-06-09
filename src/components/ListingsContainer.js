import React from "react";
import ListingCard from "./ListingCard";
import Form from "./Form";

function ListingsContainer({ listings, setListings }) {
  const listingCards = listings.map((listing) => <ListingCard listing={listing} key={listing.id} onDeleteClick={handleDeleteClick} />);

  function handleDeleteClick(deletedListing) {
    fetch(`http://localhost:6001/listings/${deletedListing.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
      setListings(updatedListings);
    });
  }

  function handleSort() {
    setListings((listings) => {
      const sortedListings = listings.sort((a, b) => {
        return a.location.toLowerCase().localeCompare(b.location.toLowerCase());
      })
      console.log(listings);
      return sortedListings;
    });
  }

  return (
    <main>
      <Form listings={listings} setListings={setListings} /><br />
      <button onClick={handleSort}>Alphabetically Sort by Location</button>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
