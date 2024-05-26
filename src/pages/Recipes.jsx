import axios from "axios";
import { useEffect, useState } from "react";
import SingleRecipe from "../components/home/SingleRecipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/recipes");
      setRecipes(data?.data);
    }
    load();
  }, [recipes]);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center py-5">
        Reci<span className="text-red-500">pes</span>
      </h1>
      <div className="grid grid-cols-4 mx-16">
        {recipes?.map((recipe) => (
          <SingleRecipe key={recipe?.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
