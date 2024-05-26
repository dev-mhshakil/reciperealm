import axios from "axios";
import { useEffect, useState } from "react";
import RecipeRow from "../../components/cards/RecipeRow";
import { Toaster } from "react-hot-toast";

const ManageAllRecipe = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/recipes");
      if (data?.status == 200) {
        setRecipes(data?.data);
      }
    }
    load();
  }, [recipes]);

  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-4xl mb-4">Manage All Recipe</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {recipes?.map((recipe) => (
            <RecipeRow key={recipe?.id} recipe={recipe} />
          ))}
        </tbody>
      </table>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default ManageAllRecipe;
