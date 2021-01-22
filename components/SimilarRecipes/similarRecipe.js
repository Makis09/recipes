import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SimilarRecipes({ fullRecipeList, singleRecipe }) {
  const similar = fullRecipeList.reduce((accumulator, currentValue) => {
    console.log(currentValue.tags);
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

  const g = similar.sort((a, b) => {
    b.similarities - a.similarities;
  });
  return (
    <Grid container spacing={5}>
      {similar
        .sort((a, b) => b.similarities - a.similarities)
        .slice(1, 5)
        .map((recipe) => {
          return (
            <Grid item md={3} key={recipe._id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={recipe.name}
                  height="200"
                  image={`/static/images/${recipe.name}.jpg`}
                  title={recipe.name}
                />
                <CardContent>
                  <Typography>{recipe.name}</Typography>
                  <Typography variant="h5" color="textSecondary">
                    Mexican - DInner
                  </Typography>
                  <div>
                    <FontAwesomeIcon size="lg" icon={["far", "clock"]} />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
}
