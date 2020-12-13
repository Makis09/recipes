import Head from "next/head";
import Image from "next/image";
import { getAllRecipeIds, getRecipeData } from "../utils/recipes";
import Link from "next/Link";
import Header from "../components/Header/header";
import { Container, Grid } from "@material-ui/core";
import classes from './recipe.module.scss'


export default function recipe(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container >
        <Grid item md={12}>
          <Image
            src={`/../static/images/${props.recipeData.name}.jpg`}
            alt={recipe.name}
            width={700}
            height={500}
          />
        </Grid>
      </Grid>
      <Container>
        <Grid container>
          <Grid item md={8}>

            <Header>{props.recipeData.name}</Header>
            <div className={classes.preparationDiv}><img src='../static/prep-pink.png'></img><h4 className={classes.preparation}>Preparation</h4></div>
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
            <div className={classes.instructionDiv}><img src='../static/prep-pink.png'></img><h4 className={classes.preparation}>Instructions</h4></div>
            <ul className={classes.ulPreparation}>
              {props.recipeData.ingredients.map((ingredient) => {
                return (
                  <li
                    key={ingredient}
                    className={classes.liPreparation}
                  >
                    {ingredient}
                  </li>
                )
              })}
            </ul>
            {/* btn save */}<button className={classes.saveBtn}>Save recipe</button>
            {/* btn copy */}<button className={classes.copyBtn}>Copy URL</button>
            {/* btn back */}<Link href='/'><button className={classes.backBtn}>Back</button></Link>
          </Grid>
          <Grid item md={12}>
            Lorem ipsum dolor sit amet nsectetur adipisicing elit. Quisquam totam iusto consectetur porro accusantium excepturi  consectetur adipisicing elit. Quisquam totam iusto consectetur porro accusantium excepturi inventore velit amet nobis illum!
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
  return {
    props: {
      recipeData,
    },
  };
}


