import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  const handleResponse = (response) => {
    setResults(response.data[0]);
  };

  const load = () => {
    setLoaded(true);
    search();
  };

  const handlePexel = (response) => {
    setPhotos(response.data.photos);
    console.log(photos);
  };

  const handleKeyWordChange = (event) => {
    setKeyWord(event.target.value);
  };

  const search = () => {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f9170000100000199c19d74bfc34a36a37436fae2e592d3";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=8`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexel);
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
              onChange={handleKeyWordChange}
              defaultValue={props.defaultKeyWord}
            />
            <button type="submit" className="btn btn-primary btn-lg">
              Search
            </button>
          </div>
        </form>
        <Results results={results} photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
