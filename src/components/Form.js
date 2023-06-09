import React, { useState } from "react";

function Form({ listings, setListings }) {
    const [data, setData] = useState({"description": "", "image": "", "location": ""});
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(d => setListings([...listings, d]));
        setData({"description": "", "image": "", "location": ""});
    }
    function handleChange(e) {
        setData({...data, [e.target.id]: e.target.value})
    }
    return (
        <form onSubmit={handleSubmit}>
            <label name="description">Description: </label>
            <input id="description" value={data.description} onChange={handleChange}></input>
            <label name="image"> Image URL: </label>
            <input id="image" value={data.image} onChange={handleChange}></input>
            <label name="location"> Location: </label>
            <input id="location" value={data.location} onChange={handleChange}></input>
            <button>Add Listing</button>
        </form>
    )
}

export default Form;