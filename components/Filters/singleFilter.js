import React from "react";
import { Avatar } from "@material-ui/core";
import classes from "./singleFilter.module.scss";

function GetSingleFilter() {
  const filtersArray = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Seafood",
    "Asian",
    "Italian",
    "Mexican",
    "Baked",
  ];

  return (
    <div className={classes.filters}>
      {filtersArray.map((filter) => {
        return (
          <div key={filter} className={classes.singleFilter}>
            <Avatar
              src={`/static/filter-images/${filter}.jpg`}
              style={{ height: "60px", width: "60px", margin: "0 auto" }}
              alt={filter}
            />
            <span>{filter}</span>
          </div>
        );
      })}
    </div>
  );
}

export default GetSingleFilter;
