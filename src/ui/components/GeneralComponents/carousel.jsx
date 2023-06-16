import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ images,txt }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showArrows={true}
      stopOnHover={true}
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-slide">
          <img className="imagenescc" src={image.src} alt={image.alt} />
          <div className="carousel-title">
            <h1
              style={{
                color: "black",
                fontSize: "40pt",
                textShadow: "1px 1px 1px white",
              }}
            >
              {txt}
            </h1>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
