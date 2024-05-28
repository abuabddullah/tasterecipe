import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Bounce, toast } from "react-toastify";

const AddProducts = () => {
  const [categories, setCategories] = useState();
  const formRef = useRef(null);

  const notifyToastify4AddRecipe = () =>
    toast("🦄 Recipe Adding Successful!", {
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
    // fetching-3: inside useEffect by async-await+axios
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data?.status === 200) {
        setCategories(data?.data);
      }
    }

    load();
  }, []);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();
    const isProceed = confirm("Are you sure wanna create a new recipe?");
    if (isProceed) {
      const form = e.target;

      const id = form.id.value;
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

      const res4CreateRecipe = await axios.post(
        "http://localhost:3000/recipes",
        recipeData
      );
      if (res4CreateRecipe.status == 201) {
        // alert("Recipe Created Successfully!!");
        notifyToastify4AddRecipe();
        formRef.current.reset();
      }
    } else {
      alert("Ok! no issues");
    }
  };
  return (
    <section className="flex justify-center">
      <div className="w-full md:w-2/3 px-6 md:px-16">
        <h1 className="text-2xl text-center my-10 md:text-4xl mb-4">
          Add Recipe
        </h1>
        <form ref={formRef} onSubmit={handleCreateRecipe} className="w-full">
          <div className="mb-4">
            <label htmlFor="">Id </label>
            <input type="text" name="id" className="w-full py-3 px-5 border" />
          </div>
          <div className="mb-4">
            <label htmlFor="">Title </label>
            <input
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
              className="w-full py-3 px-5 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Cateogry </label>
            <select name="category" id="" className="w-full py-3 px-5 border">
              {categories?.map((category) => (
                <option key={category?.id} value={category?.title}>
                  {category?.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="">Description </label>
            <textarea name="description" className="w-full py-3 px-5 border" />
          </div>

          <div className="mb-4">
            <input
              type="submit"
              value={"Add Recipe"}
              className="w-full btn py-3 px-5 border btn-neutral"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProducts;
