import React from 'react';

const ImageGallery = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-6">
          {[
            'foto-barbearia.jpg',
            'exemplo-3-barbearia.jpg',
            'exemplo-de-ft-barbearia.jpg',
            'exemplo-ft 2.jpg',
            'exemplo-3-barbearia.jpg',
            'exemplo-3-barbearia.jpg',
          ].map((image, index) => (
            <div 
              key={index} 
              className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ${index === 3 ? 'mt-[-10px]' : ''}`}
            >
              <img
                src={`/images/${image}`}  
                alt={`Example ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;
