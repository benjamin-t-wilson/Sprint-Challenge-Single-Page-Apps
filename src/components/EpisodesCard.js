import React from "react";
import { css, cx } from "emotion";

const EpisodesCard = props => {
  const ep = props.ep;
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
        {ep.name}
      </h1>
      <p>Episode: {ep.episode}</p>
      <p>Aired: {ep.air_date}</p>
      <p>Contains {ep.characters.length} characters</p>
    </div>
  );
};

export default EpisodesCard;
