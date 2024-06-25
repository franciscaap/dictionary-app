import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic mb-2">
      <h4>{props.phonetic.text}</h4>
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </div>
  );
}
