import React, { useState } from "react";

function SeachForm() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <div className="search-box">
      <input
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default SeachForm;
