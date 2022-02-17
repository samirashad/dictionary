import React, { useState } from "react";

import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  const handleResponse = (response) => {
    console.log(response.data[0]);
  };

  const handleKeyWordChange = (event) => {
    setKeyWord(event.target.value);
  };
  const search = (event) => {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="d-flex justify-content-center">
          <input
            className="inputKeyWord "
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
