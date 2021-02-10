import React from "react";
import { Avatar } from "@material-ui/core";
import classes from "../filters.module.scss";

function singleFilter({ changeActiveFilters, activeFilters }) {
  const filtersArray = [
    "chicken",
    "pork",
    "beef",
    "pasta",
    "potato",
    "seafood",
    "vegan",
    "dessert",
  ];

  return (
    <>
      {filtersArray.map((filter) => (
        <div
          key={filter}
          className={classes.singleFilter}
          onClick={() => changeActiveFilters(filter)}
        >
          <Avatar
            className={
              activeFilters.includes(filter) ? classes.activeFilter : classes.notActiveFilter
            }
            src={`/static/filter-images/${filter}.jpg`}
            style={{
              height: "55px",
              width: "55px",
              margin: "0 auto",
            }}
            alt={filter}
          />
          <span>{filter}</span>
        </div>
      ))}
    </>
  );
}

export default singleFilter;
