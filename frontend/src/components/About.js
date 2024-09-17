import React, { useState } from 'react';

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="border-2 p-4 max-w-3xl m-auto mt-6 border-gray-300 rounded-lg text-center">
      {/* Title */}
      <h2 className="text-4xl font-semibold mb-4 font-trebuchetMs text-gray-800">About Us</h2>

      {/* Paragraph with Read More */}
      <p className={`font-trebuchetMs text-lg text-gray-700 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
        LCAACST is for not-profit; non-governmental charity organization locally
        registered on August 20, 2019 and accorded legal personality with registration
        number 4372. LCAACST is emulated from the global successes stories of Australia
        and Germany land cares’ profound achievement that has been adopted
        worldwide by many countries and land managers for their fruitful collective
        action. LCAACST is thus committed to make our city Addis Ababa and
        surrounding towns’ neat, green, climate resilient and priority choice to live among
        cities of the world through “collective action”.
      </p>
      
      {/* Read More/Collapse Button */}
      <button 
        onClick={toggleReadMore}
        className="mt-2 text-blue-600 hover:text-blue-800 font-medium focus:outline-none">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>

      {/* Image */}
      <img className="lg:w-3/4 m-auto md:w-2/4 h-96 mt-6 sm:w-full rounded-lg" src="/landcare_c.png" alt="Landcare Image" />
    </section>
  );
}

export default About;
