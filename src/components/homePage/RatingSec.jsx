import React from "react";

const RatingSec = () => {
  return (
    <>
      <h2 className="text-center m-6 text-2xl md:text-4xl font-bold">Ratings</h2>
      <section className="md:container md:mx-auto m-6 flex justify-center">
        <div className="rating rating-lg rating-half">
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-1"
            checked
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
        </div>
      </section>
    </>
  );
};

export default RatingSec;
