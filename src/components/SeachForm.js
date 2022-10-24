import React, { useState } from "react";
import { useBooks } from "../contexts/BooksContext";

function SeachForm() {
  const [query, setQuery] = useState("");
  const { searchBooks } = useBooks();

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query === "") return;
    searchBooks(query);
    setQuery("");
  };

  return (
    <div className="search-box">
        <input
          className="search-input"
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(e) => handleChange(e)}
        />
        <button className='search-button' onClick={(e) => handleSearch(e)}>Search</button>
    </div>
  );
}

export default SeachForm;
