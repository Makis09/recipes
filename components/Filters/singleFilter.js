import React from "react";
import arrayFilters from "./filterArray";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function GetSingleFilter() {
  const filtersArray = arrayFilters;

  return (
    <div>
      {filtersArray.map((filter) => {
        return (
          <div key={filter.type}>
            <Avatar
              src={`/static/filter-images/${filter.type}.jpg`}
              style={{ height: "60px", width: "60px" }}
              alt={filter.type}
            />
            <p>{filter.type}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GetSingleFilter;
