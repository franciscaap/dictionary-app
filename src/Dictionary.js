import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function search(event) {
    alert(`Searching for ${keyword}`);
  }

  function updateSearch(event) {
    event.preventDefault();
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
