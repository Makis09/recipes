import Head from "next/head";
import Link from "next/Link";
import css from "../styles/test.scss";
import { getAllRecipes } from "../lib/recipes";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

export default function Home(props) {
  const allRecipes = getAllRecipes();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>bezveze</h1>
        <Grid container spacing={1}>
          {allRecipes.map((recipe) => (
            <Grid container key={recipe.name} item xs={4}>
              <Link
                href={`/${
                  recipe.name.toLowerCase().replace(/\s/g, "-") +
                  "&&" +
                  recipe.id
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
