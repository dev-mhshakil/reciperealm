import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleRecipe = ({ recipe }) => {
  const { id, name, category, description, image, price } = recipe;

  return (
    <div className="p-3">
      <div className="w-auto rounded-sm bg-base-100 shadow-xl">
        <figure>
          <img className="h-64 w-full" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {description?.length > 30 ? description?.slice(0, 30) : description}
            ...
          </p>
          <h2 className="font-bold">
            Price: <span className="text-red-500">${price}</span>
          </h2>
          <div className="card-actions justify-start">
            <span className="badge bg-green-500 text-white py-3 text-center">
              {category}
            </span>
          </div>
          <div className="card-actions justify-end">
            <Link
              to={`/recipes/details/${id}`}
              className=" bg-red-500 text-white p-2 rounded-sm hover:bg-red-400"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
