import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    alert(`You searched for: ${searchTerm}`);
  }

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button style={styles.button} onClick={handleSearch}>
        Go
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    border: "solid",
  },
  input: {
    padding: "10px",
    fontSize: "18px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    flex: "1",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4285f4",
    color: "#fff",
    fontSize: "18px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
};
//#4285f4

export default SearchBar;
