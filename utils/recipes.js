import { connectToDatabase } from "../utils/mongodb";
import mongo from "mongodb";

export async function getAllRecipeIds() {
  const all = await getAllRecipes();
  return all.map((recipe) => {
    return {
      params: {
        recipe: `${
          recipe.name.toLowerCase().replace(/\s/g, "-") + "&&" + recipe._id
        }`,
      },
    };
  });
}

export async function getRecipeData(id) {
  const { db } = await connectToDatabase();
  let query = id.split("&&")[1];

  const o_id = new mongo.ObjectID(query);
  const recipe = await db
    .collection("recipeList")
    .find({ _id: o_id })
    .toArray();

  return JSON.parse(JSON.stringify(recipe[0]));
}

export async function getAllRecipes() {
  const { db } = await connectToDatabase();
  const allRecipes = await db.collection("recipeList").find({}).toArray();
  return JSON.parse(JSON.stringify(allRecipes));
}

// export async function getRecipes(page) {
//   const { db } = await connectToDatabase();
//   const filters = ["POTATO" , "PORK"];
//   console.log(page)
//   const allRecipes = await db
//     .collection("recipeList")
//     .find({ tags: {  "$in" :filters } })
//     .toArray();
//   return JSON.parse(JSON.stringify(allRecipes));
// }
