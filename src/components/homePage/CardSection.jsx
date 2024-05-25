import React from "react";

const CardSection = () => {
  return (
    <section className="md:bg-yellow-100 md:p-4">
        <div className="card lg:card-side bg-base-100 shadow-xl my-12">
      <figure>
        <img
          src="https://source.unsplash.com/600x300/?street,food,junkfood"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CardSection;
