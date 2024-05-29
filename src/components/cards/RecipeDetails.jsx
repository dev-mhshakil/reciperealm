import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();

  const [recipeDetails, setRecipeDetails] = useState();

  useEffect(() => {
    async function load() {
      const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);

      if (recipeData?.status == 200) {
        setRecipeDetails(recipeData?.data);
      }
    }

    load();
  }, [id]);

  return (
    <div className="w-3/4 mx-auto">
      <div className="flex justify-center w-1/2 mx-auto">
        <img className="w-full" src={recipeDetails?.image} alt="" />
      </div>

      <div>
        <h1 className="text-3xl font-bold py-4">{recipeDetails?.name}</h1>
        <h2>
          <span className="font-bold"> Category: </span>
          <span className="text-red-500 font-bold pb-3">
            {recipeDetails?.category}
          </span>
        </h2>
        <p className="py-3">
          <span className="font-bold">Description:</span>{" "}
          <span>{recipeDetails?.description}</span>
        </p>
        <p className="pb-4">
          <span className="font-bold">Instruction:</span>{" "}
          {recipeDetails?.instructions}
        </p>
      </div>
      {/* <div>
        {recipeDetails?.ingredients?.map((i) => {
          <div>i.name</div>;
        })}
      </div> */}
    </div>
  );
};

export default RecipeDetails;
