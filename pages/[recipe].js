import Head from "next/head";
import Image from "next/image";
import { getAllRecipeIds, getRecipeData } from "../utils/recipes";
import Link from "next/Link";

export default function recipe(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{props.recipeData.name}</h1>
      <Image
        src={`/../static/images/${props.recipeData.name}.jpg`}
        alt={recipe.name}
        width={700}
        height={500}
      />
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
