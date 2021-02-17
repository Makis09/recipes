import React from "react";
import { Grid } from "@material-ui/core";
import RecipeCard from "./recipeCard/singleRecipeCard";
import classes from "./recipeCards.module.scss";

export default function recipeCards({ allRecipes, isMobile, slide }) {
  const g = slide.position + 87;

  return (
    <Grid
      item
      md={10}
      sm={11}
      xs={9}
      className={classes.recipesMain}
      style={
        isMobile
          ? {
              maxWidth: `calc(100% - ${g}px)`,
              willChange: `${slide.willChange ? "max-width" : "initial"}`
            }
          : null
      }
    >
      <Grid container spacing={3}>
        {allRecipes.map((recipe) => {
          return <RecipeCard key={recipe._id} recipeDetails={recipe} />;
        })}
      </Grid>
    </Grid>
  );
}
