import Head from "next/head";
import Link from "next/Link";
import styles from "../styles/Home.module.css";
import { getAllRecipes } from "../lib/recipes";

export default function Home(props) {
  const allRecipes = getAllRecipes();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>bezveze</h1>
        {allRecipes.map((recipe) => (
          <Link
            href={`/${
              recipe.name.toLowerCase().replace(/\s/g, "-") + "&&" + recipe.id
            }`}
            key={recipe.name}
          >
            <a style={{ margin: "20px" }}>{recipe.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
