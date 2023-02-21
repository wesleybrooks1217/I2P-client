import React, { useState } from "react";
import axios from "axios";
import { API, init_api } from "../API";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch() {
    try {
      init_api();
      const response = await API.get(`/api/search/career/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
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
        Search
      </button>
      {searchResults.map((result) => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
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

export default SearchBar;
