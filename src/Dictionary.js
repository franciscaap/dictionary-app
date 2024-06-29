import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState([]);

  function searchKeyword(response) {
    setResults(response.data[0]);
  }

  function searchPhotos(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://api.dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(searchKeyword);

    let photoApiKey = "9b00a0b2o792ct546c043d35bf49a6e3";

    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;

    axios.get(photoApiUrl).then(searchPhotos);
  }

  function updateSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up? </h1>
        <form onSubmit={search} className="text-center">
          <input
            type="search"
            placeholder="Search for a word"
            onChange={updateSearch}
            className="search-input"
          />
        </form>
        <p>i.e. computer, coagulate, london, coding</p>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
