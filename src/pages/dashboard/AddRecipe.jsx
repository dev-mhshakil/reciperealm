import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddRecipe = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");

      if (data?.status == 200) {
        setCategories(data?.data);
      }
    }
    load();
  }, [categories]);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const price = form.price.value;

    const recipeData = {
      id,
      name,
      category,
      image,
      price,
    };

    await axios
      .post("http://localhost:3000/recipes", recipeData)
      .then(function (response) {
        if (response?.status == 201) {
          toast.success("Recipe Added Successfully");
        }
        form.reset();
      });
  };
  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Add Recipe</h1>
      <form onSubmit={handleCreateRecipe} action="">
        <div className="mb-3">
          <label htmlFor="" className="">
            Id
          </label>
          <input
            type="number"
            name="id"
            id=""
            className="w-full py-3 px-4 input input-bordered"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Recipe Name</label>
          <input
            type="text"
            name="name"
            id=""
            className="w-full py-3 px-4 input input-bordered "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Price</label>
          <input
            type="number"
            name="price"
            id=""
            className="w-full py-3 px-4 input input-bordered"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Category</label>
          <select
            name="category"
            id=""
            className="w-full py-3 px-4 border border-solid rounded-lg"
          >
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="">Image</label>
          <input
            type="text"
            name="image"
            id=""
            className="w-full py-3 px-4 input input-bordered"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Description</label>
          <textarea
            type="text"
            name="description"
            id=""
            className="w-full h-20 py-3 px-4 input input-bordered"
          />
        </div>
        <div className="mb-3">
          <input
            type="submit"
            name=""
            value="Add Recipe"
            className="btn bg-green-500 text-white"
            id=""
          />
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default AddRecipe;
