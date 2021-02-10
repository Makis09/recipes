import Head from "next/head";

import {
  getAllRecipeIds,
  getRecipeData,
  getAllRecipes,
} from "../utils/recipes";
import Link from "next/link";
import Header from "../components/Header/header";
import { Container, Grid } from "@material-ui/core";
import classes from "./recipe.module.scss";
import SimilarRecipes from "../components/SimilarRecipes/similarRecipe";

export default function recipe(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container justify="center">
        <Grid item md={6}>
          <img
            className={classes.recipeImage}
            src={`/../static/images/${props.recipeData.name}.jpg`}
            alt={recipe.name}
          />
        </Grid>
      </Grid>
      <Container>
        <Grid container>
          <Grid item md={8}>
            <Header>{props.recipeData.name}</Header>
            <div className={classes.preparationDiv}>
              <img src="../static/prep-pink.png"></img>
              <h4 className={classes.preparation}>Preparation</h4>
            </div>
            <ul className={classes.ulPreparation}>
              {props.recipeData.instructions.map((instruction) => {
                const bold = instruction.includes("bolded");

                return (
                  <li
                    key={instruction}
                    style={{ fontWeight: bold ? "700" : "inherit" }}
                    className={classes.liPreparation}
                  >
                    {instruction}
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item md={1}>
            {/* Empty for space */}
          </Grid>
          <Grid item md={3}>
            <div className={classes.instructionDiv}>
              <img src="../static/prep-pink.png"></img>
              <h4 className={classes.preparation}>Instructions</h4>
            </div>
            <ul className={classes.ulPreparation}>
              {props.recipeData.ingredients.map((ingredient, index) => {
                return (
                  <li key={index} className={classes.liPreparation}>
                    {ingredient}
                  </li>
                );
              })}
            </ul>

            <button className={classes.saveBtn}>Save recipe</button>
            <button className={classes.copyBtn}>Copy URL</button>
            <Link href="/">
              <button className={classes.backBtn}>Back</button>
            </Link>
          </Grid>
          <Grid container>
            <Grid
              item
              md={12}
              className={classes.preparationDiv}
              style={{ marginBottom: "20px" }}
            >
              <img src="../static/prep-pink.png"></img>
              <h4 className={classes.preparation}>Similar recipes</h4>
            </Grid>
            <SimilarRecipes
              fullRecipeList={props.allRecipes}
              singleRecipe={props.recipeData}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = await getAllRecipeIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const recipeData = await getRecipeData(params.recipe);
  const allRecipes = await getAllRecipes();
  return {
    props: {
      recipeData,
      allRecipes,
    },
  };
}
