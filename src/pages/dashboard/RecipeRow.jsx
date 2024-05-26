import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const RecipeRow = ({ recipe, deleteRecipe }) => {
  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/editRecipe/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteRecipe(recipe?.id)}
          className="btn btn-xs btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default RecipeRow;
