import classes from "./recipeCard.module.scss";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecipeCard() {
  return (
    <Grid className={classes.recipeCard} item md={4}>
      <Card>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image="/static/images/Tartiflette.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h3">maaaaaaa</Typography>
          <Typography variant="h5" color="textSecondary">
            Mexican - DInner
          </Typography>
          <div className={classes.meow}>
            <FontAwesomeIcon size="lg" icon={["far", "clock"]} />
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
