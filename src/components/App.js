import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setListings(data));
  }, []);

  if (!listings) return <p>Loading...</p>;

  return (
    <div className="app">
      <Header listings={listings} setListings={setListings} />
      <ListingsContainer listings={listings} setListings={setListings} />
    </div>
  );
}

export default App;
