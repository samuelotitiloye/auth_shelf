import React from "react";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    
    <div className="addItemDiv">
      <h3>Add an Item</h3>
      <input placeholder="Item Description" />
      <input placeholder="Image URL" />
      <button>Add Item</button>
    </div>

    <p>Shelf Page</p>
  </div>
);

export default InfoPage;
