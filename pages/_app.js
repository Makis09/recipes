import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.scss";
import "../utils/fontAwesome";

function MyApp({ Component, pageProps }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [page, setPage] = useState(1);

  const changeActiveFilters = (clickedFilter) => {
    const updatedActiveFilters = [...activeFilters];
    if (updatedActiveFilters.includes(clickedFilter)) {
      const index = updatedActiveFilters.indexOf(clickedFilter);
      updatedActiveFilters.splice(index, 1);
    } else {
      updatedActiveFilters.push(clickedFilter);
    }
    setActiveFilters(updatedActiveFilters);
  };
  return (
    <>
      <Navbar />
      <Component
        {...pageProps}
        activeFilters={activeFilters}
        changeActiveFilters={changeActiveFilters}
        page={page}
      />
    </>
  );
}

export default MyApp;
