import React from "react";
import { css } from "emotion";

export default function LocationCard(props) {
  const loc = props.loc;
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
      <h1
        className={css`
          text-align: center;
        `}
      >
        {loc.name}
      </h1>
      <p>Type: {loc.type}</p>
      <p>Dimension: {loc.dimension}</p>
      <p>Number of residents: {loc.residents.length}</p>
    </div>
  );
}
