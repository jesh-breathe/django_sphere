import React from 'react';

function Hero() {
  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-trebuchetMs text-gray-800 mt-4 mb-6">
            Land Care for Addis Ababa City and Surrounding Towns
          </h1>

          <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://cdn.climatechangenews.com/files/2020/03/11143041/Addis-Ababa-at-Meskel-Square.jpg"
              alt="Addis Ababa at Meskel Square"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
