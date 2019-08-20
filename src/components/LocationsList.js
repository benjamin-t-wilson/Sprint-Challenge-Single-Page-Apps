import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard.js";
import Header from "./Header.js";
import TabNav from "./TabNav.js";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locList, setLocList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        setLocList(res.data.results);
      })
      .catch(err => {
        console.log("error", err);
      });
  }, []);

  return (
    <>
      <Header />
      <TabNav />
      <section className="location-list grid-view">
        {locList.map(loc => {
          return <LocationCard loc={loc} key={loc.id} />;
        })}
      </section>
    </>
  );
}
