import React, { useEffect, useState } from 'react';

function Vision() {
  const images = [
    'https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1679054320793-b85a27a99829?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1709757969464-bf02d110e5ee?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1710697277134-674476a1ebdc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="border-2 p-2 rounded-lg border-gray-300 max-w-3xl self-center m-auto mt-2 flex flex-col justify-center items-center py-8 px-4">
      {/* Title */}
      <h2 className="text-4xl font-semibold mb-4 text-center font-trebuchetMs text-gray-800">Our Vision</h2>

      {/* Slideshow */}
      <div className="w-full lg:w-3/4 relative">
        <img
          src={images[currentImageIndex]}
          alt={`Vision Slide ${currentImageIndex + 1}`}
          className="rounded-lg w-full h-72 object-cover transition-opacity duration-1000"
        />
      </div>

      {/* Indicators (Optional) */}
      <div className="flex mt-4 gap-2 justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Vision;
