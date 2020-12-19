import classes from "./recipeCard.module.scss";
import Link from "next/Link";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecipeCard({ recipeDetails }) {
  const recipeTags =
    recipeDetails.tags[0] === "BON APPÉTIT"
      ? recipeDetails.tags.slice(1, 4)
      : recipeDetails.tags.slice(0, 3);
  return (
    <Grid item md={4}>
      <Link
        style={{ display: "block" }}
        href={`/${
          recipeDetails.name.toLowerCase().replace(/\s/g, "-") +
          "&&" +
          recipeDetails._id
        }`}
      >
        <a>
          <Card className={classes.cardMain}>
            <CardMedia
              component="img"
              alt={recipeDetails.name}
              height="250"
              image={`/static/images/${recipeDetails.name}.jpg`}
              title={recipeDetails.name}
            />
            <CardContent className={classes.CardBody}>
              <Typography className={classes.cardTitle} variant="h5">
                {recipeDetails.name}
              </Typography>
              <Typography
                className={classes.cardTags}
                variant="h6"
                color="textSecondary"
              >
                {`${recipeTags[0]} | ${recipeTags[1]} | ${recipeTags[2]} `}
              </Typography>
              <div className={classes.recipeInfo}>
                <span>
                  <FontAwesomeIcon size="lg" icon={["far", "clock"]} />
                  {recipeDetails.prepTime}
                </span>
                <span>
                  <FontAwesomeIcon size="lg" icon={"utensils"} />
                  {recipeDetails.servings}
                </span>
              </div>
            </CardContent>
          </Card>
        </a>
      </Link>
    </Grid>
  );
}
