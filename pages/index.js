import Head from "next/head";
import Link from "next/Link";
import css from "../styles/test.scss";
import { Grid, Button } from "@material-ui/core";
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
        <Grid container spacing={1}>
          {props.allRecipes.map((recipe) => (
            <Grid container key={recipe.name} item xs={4}>
              <Link
                href={`/${
                  recipe.name.toLowerCase().replace(/\s/g, "-") +
                  "&&" +
                  recipe._id
                }`}
              >
                <a className={css.test}>{recipe.name}</a>
              </Link>
              <Button variant="contained">Default</Button>
            </Grid>
          ))}
        </Grid>
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
