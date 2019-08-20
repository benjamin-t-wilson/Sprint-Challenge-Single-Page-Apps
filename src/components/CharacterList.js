import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import Header from "./Header.js";
import TabNav from "./TabNav.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharList(res.data.results);
      })
      .catch(err => {
        console.log("error", err);
      });
  }, []);

  return (
    <>
      <Header />
      <TabNav />
      <section className="character-list grid-view">
        {charList.map(char => {
          return <CharacterCard char={char} key={char.id} />;
        })}
      </section>
    </>
  );
}
