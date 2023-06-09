import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  const images = [
    {
      src: "../../../../public/Images/ima1.jpg",
      alt: "Imagen 1",
      title: "Título de la imagen 1",
    },
    {
      src: "../../../../public/Images/ima2.jpg",
      alt: "Imagen 2",
      title: "Título de la imagen 2",
    },
    {
      src: "../../../../public/Images/ima3.jpg",
      alt: "Imagen 3",
      title: "Título de la imagen 3",
    },
  ];

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
            <h1 style={{ color: "black", fontSize: "40pt" ,textShadow: "1px 1px 1px white"}}>
              PROCENTER AUTOS
            </h1>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
