import React from "react";
import CategoryCard from "../shared/CategoryCard";

const Categories = ({categoris}) => {
  return (
    <div>
      <div className="mx-6 md:mx-16">
        <h1 className="text-2xl md:text-4xl my-10 md:my-20 text-center">Our Recipe Categories </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categoris?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
