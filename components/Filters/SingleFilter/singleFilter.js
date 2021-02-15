import React from "react";
import { Avatar } from "@material-ui/core";
import classes from "../filters.module.scss";

function singleFilter({ changeActiveFilters, activeFilters, filter }) {
  return (
    <>
      <div
        key={filter}
        className={classes.singleFilter}
        onClick={() => changeActiveFilters(filter)}
      >
        <Avatar
          className={
            activeFilters.includes(filter)
              ? classes.activeFilter
              : classes.notActiveFilter
          }
          src={`/filter-images/${filter}.jpg`}
          style={{
            height: "55px",
            width: "55px",
            margin: "0 auto",
          }}
          alt={filter}
        />
        <span>{filter}</span>
      </div>
    </>
  );
}

export default singleFilter;
