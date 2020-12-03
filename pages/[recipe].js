import Head from "next/head";
import { getAllRecipeIds, getRecipeData } from "../lib/recipes";
import Link from "next/Link";

export default function meo(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{props.recipeData.name}</h1>
      <h4>Preparation</h4>
      <ul>
        {props.recipeData.instructions.map((instruction) => {
          const bold = instruction.includes("bolded");
          return (
            <li
              key={instruction}
              style={{ fontWeight: bold ? "700" : "inherit" }}
            >
              {instruction}
            </li>
          );
        })}
      </ul>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = getAllRecipeIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const recipeData = getRecipeData(params.recipe);
  return {
    props: {
      recipeData,
    },
  };
}
