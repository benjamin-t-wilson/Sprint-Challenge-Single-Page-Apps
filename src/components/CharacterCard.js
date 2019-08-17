import React from "react";
import { css } from "emotion";

export default function CharacterCard(props) {
  const char = props.char;
  return (
    <div
      className={css`
        margin: 30px;
        padding: 30px;
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
      `}
    >
      <img src={char.image} alt={`portrait of ${char.name}`}/>
      <h1
        className={css`
          text-align: center;
        `}
      >
        {char.name}
      </h1>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <p>Species: {char.species}</p>
        <p>Status: {char.status}</p>
        <p>Gender: {char.gender}</p>
        <p>Location: {char.location.name}</p>
        <p>Origin: {char.origin.name}</p>
        <p>Appears in {char.episode.length} episodes</p>
      </div>
    </div>
  );
}
