import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecepiCard from "../shared/RecepiCard";

const OurProducts = () => {
  const [recipes, setRecipes] = useState();

  // fetching-1: inside useEffect by fetch.then.then 
  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <>
      <section className="md:container md:mx-auto m-6 grid grid-cols-1">
        <div className="md:mx-16">
          <h1 className="text-2xl md:text-4xl my-10 md:my-20 text-center">Our Recipes </h1>
          <div className="grid md:grid-cols-4 gap-6">
            {recipes
              ?.reverse()
              ?.slice(0, 4)
              ?.map((recipe) => (
                <RecepiCard key={recipe?.id} recipe={recipe} />
              ))}
          </div>
        </div>

        <Link to="/products" className="flex justify-center my-5"><button className="btn btn-primary">See All Products</button></Link>
      </section>
    </>
  );
};

export default OurProducts;
