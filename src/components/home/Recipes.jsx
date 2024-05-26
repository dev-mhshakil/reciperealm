/* eslint-disable react/prop-types */
import SingleRecipe from "./SingleRecipe";

const Recipes = ({ recipes }) => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center py-5 ">
        Reci<span className="text-red-500">pes</span>
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {recipes
          ?.reverse()
          ?.slice(0, 8)
          .map((recipe) => (
            <SingleRecipe key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default Recipes;
