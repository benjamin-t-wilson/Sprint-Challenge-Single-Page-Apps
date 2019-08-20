import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodesCard from "./EpisodesCard.js";
import Header from "./Header.js";
import TabNav from "./TabNav.js";

const EpisodesList = () => {
  const [epiList, setEpiList] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        setEpiList(res.data.results);
      })
      .catch(err => {
        console.log("error: ", err);
      });
  }, []);

  return (
    <>
      <Header />
      <TabNav />
      <section className="episode-list grid-view">
        {epiList.map(ep => {
          return <EpisodesCard ep={ep} key={ep.id} />;
        })}
      </section>
    </>
  );
};

export default EpisodesList;
