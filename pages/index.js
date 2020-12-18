import Head from "next/head";
import { Container, Grid } from "@material-ui/core";
import { getAllRecipes } from "../utils/recipes";

import RecipeCard from "../components/recipeCard/recipeCard";

import GetSingleFilter from "../components/Filters/singleFilter";
import Carousel from "../components/Carousel/Carousel";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Container>
        <Grid container spacing={3}>
          <Grid item md={2}>
            <GetSingleFilter />
          </Grid>
          <Grid item md={10}>
            <Grid container spacing={3}>
              {props.allRecipes.map((recipe) => {
                return <RecipeCard key={recipe._id} recipeDetails={recipe} />;
              })}
              
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allRecipes = await getAllRecipes();
  return {
    props: {
      allRecipes,
    },
  };
}

