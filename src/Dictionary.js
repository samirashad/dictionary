import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);

  const handleResponse = (response) => {
    setResults(response.data[0]);
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
      <form onSubmit={search} className="searchForm">
        <div className="d-flex justify-content-center">
          <input
            className="inputKeyWord"
            type="search"
            placeholder="Type a word"
            size="40"
            onChange={handleKeyWordChange}
          />
          <button type="submit" className="btn btn-primary btn-md">
            Search
          </button>
        </div>
      </form>
      <Results data={results} />
    </div>
  );
}
