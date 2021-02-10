import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../filters.module.scss";

export default function arrows({ slide }) {
  const g = slide.position + 87;
  const angle = g * 2.5;
  return (
    <span className={classes.arrows}>
      <FontAwesomeIcon
        style={{ transform: `rotate(${angle}deg)` }}
        size="sm"
        icon={"angle-double-right"}
      />
    </span>
  );
}
