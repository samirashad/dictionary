import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  const handleKeyWordChange = (event) => {
    setKeyWord(event.target.value);
  };
  const search = (event) => {
    event.preventDefault();
    alert(`searching ${keyWord}`);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="d-flex justify-content-center">
          <input
            className="inputKeyWord me-3"
            type="search"
            placeholder="Type a word"
            onChange={handleKeyWordChange}
          />

          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
