import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <iframe
            width="700"
            height="500"
            src="https://www.youtube.com/embed/z1SC4RYyxOc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Bald Troop Video"
          />
        </div>
      </div>
    </section>
  );
}

export default VideoSection;

