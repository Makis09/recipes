import Head from "next/head";
import Link from "next/Link";
import Image from "next/image";
import { Container, Grid, Button } from "@material-ui/core";
import { getAllRecipes } from "../utils/recipes";



export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>

        {/* Navbar */}
        {/* Carousel */}
        {/* Advanced Filters */}

        <Grid container spacing={3}>

          <Grid item md={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, exercitationem!
          </Grid>
          <Grid item md={9} >
            <Grid container spacing={3}>
              {props.allRecipes.map((recipe) => {
                return (
                  <Grid item key={recipe.name} md={4} xs={4}>
                    <Link
                      style={{ display: "block" }}
                      href={`/${recipe.name.toLowerCase().replace(/\s/g, "-") +
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

                  </Grid>
                );
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
