import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const EditRecipe = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState();
  const [categories, setCategories] = useState();

  const notifyToastify4Edit = () =>
    toast("🦄 Recipe Editing Successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });


  useEffect(() => {
    const load = async () => {
      // fetch all categories
      const res4Categories = await axios.get(
        "http://localhost:3000/categories"
      );
      if (res4Categories.status == 200) {
        setCategories(res4Categories?.data);
      }

      // fetch recipe details of based on id
      const res4RecipeDetails = await axios.get(
        `http://localhost:3000/recipes/${id}`
      );
      if (res4RecipeDetails?.status === 200) {
        setRecipeDetails(res4RecipeDetails?.data);
      }
    };
    load();
  }, [id]);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();
    const isProceed = confirm("Are you sure wanna Edit the recipe?");
    if (isProceed) {
      const form = e.target;

      const title = form.title.value;
      const price = form.price.value;
      const category = form.category.value;
      const description = form.description.value;
      const recipeData = {
        id,
        title,
        price,
        category,
        description,
      };
      const res4EditRecipe = await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);
      if(res4EditRecipe.status == 200){
        // alert("Recipe Edited Successfully!!")
        notifyToastify4Edit();
      }
    } else {
      alert("Ok! no issues");
    }
  };

  return (
    <section className="flex justify-center">
      <div className="w-full md:w-2/3 px-6 md:px-16">
        <h1 className="text-2xl text-center my-10 md:text-4xl mb-4">
          Edit Recipe
        </h1>
        <form onSubmit={handleCreateRecipe} className="w-full">
          <div className="mb-4">
            <label htmlFor="">Title </label>
            <input
              defaultValue={recipeDetails?.title}
              type="text"
              name="title"
              className="w-full py-3 px-5 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Price </label>
            <input
              type="number"
              name="price"
              defaultValue={recipeDetails?.price}
              className="w-full py-3 px-5 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Cateogry </label>
            <select name="category" id="" className="w-full py-3 px-5 border">
              {categories?.map((category) => (
                <option
                  key={category?.title}
                  selected={category?.title === recipeDetails?.category}
                  value={category?.title}
                >
                  {category?.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="">Description </label>
            <textarea
              defaultValue={recipeDetails?.description}
              name="description"
              className="w-full py-3 px-5 border"
            />
          </div>

          <div className="mb-4">
            <input
              type="submit"
              value={"Edit Recipe"}
              className="w-full btn py-3 px-5 border btn-neutral"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditRecipe;
