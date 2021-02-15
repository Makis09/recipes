import { connectToDatabase } from "../utils/mongodb";
import mongo from "mongodb";

export async function getAllRecipeIds() {
  const all = await getAllRecipes();
  return all.map((recipe) => {
    return {
      params: {
        recipe: `${
          recipe.name.toLowerCase().replace(/\s/g, "-") + "&id=" + recipe._id
        }`,
      },
    };
  });
}

export async function getRecipeData(id) {
  const { db } = await connectToDatabase();
  let query = id.split("&id=")[1];

  const o_id = new mongo.ObjectID(query);
  const recipe = await db.collection("recipeList").findOne({ _id: o_id });

  return JSON.parse(JSON.stringify(recipe));
}

export async function getAllRecipes() {
  const { db } = await connectToDatabase();
  const allRecipes = await db.collection("recipeList").find({}).toArray();
  return JSON.parse(JSON.stringify(allRecipes));
}
