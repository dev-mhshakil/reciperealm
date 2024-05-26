/* eslint-disable react/prop-types */

import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const RecipeRow = ({ recipe }) => {
  const handleDelete = async (recipeId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (confirmed) {
      try {
        await axios
          .delete(`http://localhost:3000/recipes/${recipeId}`)
          .then(function (response) {
            if (response?.status == 200) {
              toast.success("Recipe Deleted Successfully");
            }
          });
      } catch (error) {
        console.error("There was an error deleting the recipe!", error);
      }
    }
  };

  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.name}</td>
      <td>{recipe?.category}</td>
      <td>{recipe?.price}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-recipe/${recipe?.id}`}
          className="btn btn-sm btn-neutral"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete(recipe?.id)}
          className="btn btn-sm btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default RecipeRow;
