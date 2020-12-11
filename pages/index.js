import Head from "next/head";
import Link from "next/Link";
import Image from "next/image";
import { Container, Grid, Button } from "@material-ui/core";
import { getAllRecipes } from "../utils/recipes";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>home</h1>
        <Container>
          <Grid container spacing={2}>
            {props.allRecipes.map((recipe) => {
              return (
                <Grid container item key={recipe.name} xs={4}>
                  <Link
                    style={{ display: "block" }}
                    href={`/${
                      recipe.name.toLowerCase().replace(/\s/g, "-") +
                      "&&" +
                      recipe._id
                    }`}
                  >
                    <a>{recipe.name}</a>
                  </Link>
                  <Image
                    src={`/../static/images/${recipe.name}.jpg`}
                    alt={recipe.name}
                    width="300"
                    height="200"
                  />
                  <Button variant="contained">Default</Button>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
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
