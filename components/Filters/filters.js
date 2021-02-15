import React from "react";
import { Grid } from "@material-ui/core";
import SingleFilter from "./SingleFilter/singleFilter";
import classes from "./filters.module.scss";
import Arrows from "./arrows/arrows";

function filters(props) {
  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    isMobile,
    slide,
  } = props;

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
    <Grid item md={2} sm={1} xs={3} className={classes.filtersHolder}>
      <div className={classes.sticky}>
        <div
          className={classes.filters}
          style={isMobile ? { right: `${slide.position}px` } : null}
        >
          {filtersArray.map((filter, index) => (
            <SingleFilter
              key={index}
              filter={filter}
              changeActiveFilters={props.changeActiveFilters}
              activeFilters={props.activeFilters}
            />
          ))}
          <span
            className={classes.slide}
            onTouchStart={(touchStartEvent) =>
              handleTouchStart(touchStartEvent)
            }
            onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
            onTouchEnd={(e) => handleTouchEnd(e)}
          >
            <Arrows slide={slide} />
            Filter recipes
            <Arrows slide={slide} />
          </span>
        </div>
      </div>
    </Grid>
  );
}

export default filters;
