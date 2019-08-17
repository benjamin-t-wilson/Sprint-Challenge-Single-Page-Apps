import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "emotion";

// TODO: Add missing tabs below
export default function TabNav() {
    const NavButton = css`
    padding: 15px 30px;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    border-radius: 15px;
    &:hover{
        cursor: pointer;
        color: white;
        background: #777;
    }`
  return (
    <nav className={css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 30px 0;
    `}>
      <NavLink className={NavButton} to="/">Home</NavLink>
      <NavLink className={NavButton} to="/characters">Characters</NavLink>
      <NavLink className={NavButton} to="/locations">Locations</NavLink>
      <NavLink className={NavButton} to="/episodes">Episodes</NavLink>
    </nav>
  );
}
