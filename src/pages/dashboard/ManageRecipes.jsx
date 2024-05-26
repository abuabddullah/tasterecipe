import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeRow from "./RecipeRow";

const ManageRecipes = () => {
  const [recipes, setRescipes] = useState();
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/recipes");
      if (data?.status === 200) {
        setRescipes(data?.data);
      }
    }
    load();
  }, []);
  return (
    <section>
      <h1 className="text-2xl md:text-3xl my-4 text-center">Mange All Recipe</h1>
      <div className="overflow-x-auto w-full px-5 md:px-16 mt-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recipes?.map((recipe) => (
              <RecipeRow key={recipe?.id} recipe={recipe} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageRecipes;
