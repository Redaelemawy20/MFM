import React from "react";

interface ExampleCarouselImageProps {
  text: string;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({
  text,
}) => {
  return (
    <img
      className="d-block w-100 h-screen object-center-top flex "
      src={text} // Adjust path and naming convention as needed
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
