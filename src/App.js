import React from "react";
import TabNav from "./components/TabNav.js";
import AppRouter from "./components/AppRouter.js";
import Header from "./components/Header.js";
import { css } from "emotion";

export default function App() {
  return (
    <main
      className={css`
        max-width: 1200px;
      `}
    >
      <AppRouter />
      <Header />
      <TabNav />
    </main>
  );
}
