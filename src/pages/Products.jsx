import React, { useEffect, useState } from "react";
import Categories from "../components/productsPage/Categories";
import RecepiCard from "../components/shared/RecepiCard";

const Products = () => {
  const [recipes, setRecipes] = useState();
  const [categoris, setCategories] = useState();
  useEffect(() => {
    // fetching-1: inside useEffect by fetch.then.then
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));

    // fetching-2: inside useEffect by async-await+fetch
    const load = async () => {
      const res4Categories = await fetch("http://localhost:5000/categories");
      const data4Categories = await res4Categories.json();
      setCategories(data4Categories);
    };
    load();
  }, []);
  return (
    <div>
        <section>
            <Categories categoris={categoris}/>
        </section>
      <div className="md:mx-16">
        <h1 className="text-2xl md:text-4xl my-10 md:my-20 text-center">
          Our Newest Recipes{" "}
        </h1>
        <div className="grid md:grid-cols-4 gap-6">
          {recipes?.map((recipe) => (
            <RecepiCard key={recipe?.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
