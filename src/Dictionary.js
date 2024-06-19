import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function searchKeyword(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(searchKeyword);
  }

  function updateSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search} className="mt-4">
        <input type="search" onChange={updateSearch} />
        <input type="submit" value="Search" className="ms-2" />
      </form>
    </div>
  );
}
