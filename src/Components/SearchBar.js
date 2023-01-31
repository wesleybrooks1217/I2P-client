import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    alert(`You searched for: ${searchTerm}`);
  }

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default SearchBar;