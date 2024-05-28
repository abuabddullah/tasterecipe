import React from "react";

const StepsSec = () => {
  return (
    <>
    <section className="md:py-12 bg-yellow-400">
        <h2 className="text-center m-6 text-2xl md:text-4xl font-bold">Steps</h2>
        <div className="md:container md:mx-auto my-8 flex justify-center">
          <ul className="steps steps-vertical">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default StepsSec;
