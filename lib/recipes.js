import db from "../recipes/database.json";

export function getAllRecipeIds() {
  console.log(db);
  return db.map((recipe) => {
    return {
      params: {
        recipe:
          recipe.name.toLowerCase().replace(/\s/g, "-") + "&&" + recipe.id,
      },
    };
  });
}

export function getRecipeData(id) {
  const recipe = db.find((recipe) => {
    let query = id.split("&&")[1];
    return +recipe.id === +query;
  });
  return recipe;
}
export function getAllRecipes() {
  return db;
}
