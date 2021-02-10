import { Grid } from "@material-ui/core";

import SingleRecipeCard from "../recipeCards/recipeCard/singleRecipeCard";

export default function SimilarRecipes({ fullRecipeList, singleRecipe }) {
  const similar = fullRecipeList.reduce((accumulator, currentValue) => {
    let haveSameTag = 0;
    for (let tag of singleRecipe.tags) {
      if (
        currentValue.tags.includes(tag) &&
        tag !== "BON APPÉTIT" &&
        tag !== "DINNER"
      )
        haveSameTag++;
    }
    accumulator.push({ ...currentValue, similarities: haveSameTag });
    return accumulator;
  }, []);

  return (
    <Grid container spacing={3}>
      {similar
        .sort((a, b) => b.similarities - a.similarities)
        .slice(1, 4)
        .map((recipe) => {
          return <SingleRecipeCard key={recipe._id} recipeDetails={recipe} />;
        })}
    </Grid>
  );
}
