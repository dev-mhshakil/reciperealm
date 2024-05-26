// import { useLoaderData } from "react-router-dom";
import CategoriesCard from "../components/cards/CategoriesCard";
import Banner from "../components/home/Banner";
import Recipes from "../components/home/Recipes";
import { useEffect, useState } from "react";

const Home = () => {
  // const recipes = useLoaderData();
  // console.log(recipes);

  const [recipes, setRecipes] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    // fetch("http://localhost:3000/recipes")
    //   .then((res) => res.json())
    //   .then((data) => setRecipes(data));

    async function load() {
      const recipeRes = await fetch("http://localhost:3000/recipes");
      const recipeData = await recipeRes.json();
      console.log(recipeData);
      setRecipes(recipeData);

      const categoriesRes = await fetch("http://localhost:3000/categories");
      const categoriesData = await categoriesRes.json();
      setCategories(categoriesData);
    }
    load();
  }, [recipes, categories]);
  return (
    <div>
      <Banner />
      <div>
        <h1 className="text-5xl text-center font-bold py-10">
          Our Recipe <span className="text-red-500">Category</span>
        </h1>
        <div className="grid grid-cols-4 gap-4 mx-16">
          {categories?.map((category) => (
            <CategoriesCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="mx-16">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
};

export default Home;
