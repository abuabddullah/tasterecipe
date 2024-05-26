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

  const deleteRecipe = async (id) => {
    try {
      const isDelete = confirm("Are You sure to delete");
      if (isDelete) {
        const response = await axios.delete(
          `http://localhost:3000/recipes/${id}`
        );
        if (response.status == 200) {
          alert("Data deleted successfully!!");

          // remove deleted datat from ui
          const nonDeletedRecipes = recipes.filter((reCp) => reCp.id !== id);
          setRescipes(nonDeletedRecipes);
        }
      }
      // Handle successful deletion (e.g., update UI, show confirmation)
    } catch (error) {
      console.error("Error deleting data:", error);
      // Handle errors (e.g., display error message to user)
    }
  };

  return (
    <section>
      <h1 className="text-2xl md:text-3xl my-4 text-center">
        Mange All Recipe
      </h1>
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
              <RecipeRow
                key={recipe?.id}
                recipe={recipe}
                deleteRecipe={deleteRecipe}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageRecipes;
