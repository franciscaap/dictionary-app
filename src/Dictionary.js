import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function searchKeyword(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://api.dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(searchKeyword);
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
    </div>
  );
}
