import React, { setState, useCallback, useState } from "react";

function Search({ listings, setListings }) {
  const [searchTerm, setSearchTerm] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm !== '') {
      const searchedListing = listings.filter((listing) => listing.description === searchTerm);
      setListings(searchedListing);
    }
  }

  if (searchTerm === '') {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setListings(data));
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
