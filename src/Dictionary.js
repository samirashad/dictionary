import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  const handleResponse = (response) => {
    setResults(response.data[0]);
  };
  const load = () => {
    setLoaded(true);
    search();
  };
  const handleKeyWordChange = (event) => {
    setKeyWord(event.target.value);
  };
  const search = () => {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    search();
  };
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSearch} className="searchForm">
          <div className="d-flex justify-content-center">
            <input
              className="inputKeyWord"
              type="search"
              placeholder="Type a word"
              size="40"
              onChange={handleKeyWordChange}
              defaultValue={props.defaultKeyWord}
            />
            <button type="submit" className="btn btn-primary btn-md">
              Search
            </button>
          </div>
        </form>
        <Results data={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
