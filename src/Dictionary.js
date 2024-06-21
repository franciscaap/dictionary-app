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
    <div>
      <form onSubmit={search} className="mt-4 text-center">
        <input type="search" onChange={updateSearch} />
        <input type="submit" value="Search" className="ms-2" />
      </form>
      <Results results={results} />
    </div>
  );
}
