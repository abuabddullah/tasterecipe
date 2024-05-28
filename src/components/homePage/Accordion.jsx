import React from "react";

const Accordion = () => {
  return (
    <section className="md:py-12 bg-slate-400">
      <h2 className="text-center m-6 text-2xl md:text-4xl font-bold">FAQ</h2>
      <div className="md:container md:mx-auto m-6">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What kind of cuisine does Taste Recipe serve?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Unfortunately, I can't definitively answer this question without
              more information about Taste Recipe. However, the name "Taste
              Recipe" suggests a focus on a variety of flavors and dishes,
              possibly from different cultures.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Does Taste Recipe offer dine-in, takeout, or delivery?
          </div>
          <div className="collapse-content">
            <p>
              I can't confirm their service options without reaching out to the
              restaurant directly. You can find their contact information
              through a quick web search for "Taste Recipe restaurant" or by
              calling them.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What is the price range at Taste Recipe?
          </div>
          <div className="collapse-content">
            <p>
              Again, without more information it's difficult to say. You can try
              searching online reviews that might mention pricing, or visit
              their website (if they have one) for a menu with prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
