import classes from "../recipeCards.module.scss";
import Link from "next/link";
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
    <Grid item md={4} sm={6} xs={12}>
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
                <div className={classes.recipeInfoHolder}>
                  <FontAwesomeIcon size="lg" icon={["far", "clock"]} />
                  <span>{recipeDetails.prepTime}</span>
                </div>
                <div className={classes.recipeInfoHolder}>
                  <FontAwesomeIcon size="lg" icon={"utensils"} />
                  <span>{recipeDetails.servings}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </a>
      </Link>
    </Grid>
  );
}
