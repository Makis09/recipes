import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SimilarRecipes(props) {
  let thisRecipeID = props.singleRecipe._id;
  let thisRecipeTags = props.singleRecipe.tags.filter((tag) => tag !== "BON APPÉTIT" && tag !== 'DINNER').slice(0,6);

  let allTheRecipes = props.fullRecipeList.filter(
    (item) => item._id !== thisRecipeID
  );

  let singleRecipe = allTheRecipes.filter(function (e) {
    return e.tags.some(function (a) {
      return thisRecipeTags.indexOf(a) !== -1;
    });
  });

  console.log(thisRecipeTags);
  console.log(singleRecipe);

  return (
    <div>
      <div>
        <Grid container spacing={5}>
          {singleRecipe
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .map((recipe) => {
              return (
                <Grid item md={3}>
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
      </div>
    </div>
  );
}
