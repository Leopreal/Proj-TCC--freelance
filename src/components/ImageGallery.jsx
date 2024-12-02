import React from 'react';

const ImageGallery = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Exemplo-4.jpeg',
            'Exemplo-5.jpeg',
            'Exemplo-6.jpeg',
            'Exemplo-7.jpeg',
            'Exemplo-8.jpeg',
            'Exemplo-9.jpeg',
            'Exemplo-10.jpeg',
            'Exemplo-11.jpeg',
          ].map((image, index) => (
            <div key={index} className="p-2">
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
};

export default ImageGallery;
