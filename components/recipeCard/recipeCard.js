import classes from "./recipeCard.module.scss";
import Link from "next/Link";
import Image from "next/image";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecipeCard({ recipeDetails }) {
  return (
    <Grid className={classes.recipeCard} item md={4}>
      <Link
        style={{ display: "block" }}
        href={`/${recipeDetails.name.toLowerCase().replace(/\s/g, "-") +
          "&&" +
          recipeDetails._id
          }`}
      >
        <a>
          <Card>
            <CardMedia
              component="img"
              alt={recipeDetails.name}
              height="250"
              image={`/static/images/${recipeDetails.name}.jpg`}
              title={recipeDetails.name}
            />
            <CardContent>
              <Typography className={classes.pacer} variant="h3">{recipeDetails.name}</Typography>
              <Typography variant="h5" color="textSecondary">
                Mexican - DInner
            </Typography>
              <div className={classes.meow}>
                <FontAwesomeIcon size="lg" icon={["far", "clock"]} />
              </div>
            </CardContent>
          </Card>
        </a>
      </Link>
    </Grid>
  );
}
