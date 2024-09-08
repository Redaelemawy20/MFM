import React, { useState, ReactNode, Children } from "react";

interface CardSliderProps {
  children: ReactNode; // Will accept any JSX elements as children
  visibleCards: number; // Number of cards to show at once
}

const CardSlider: React.FC<CardSliderProps> = ({ children, visibleCards }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const totalCards = Children.count(children); // Get the number of children (cards)
  const cardWidth = 120; // Assuming a fixed card width for simplicity
  const maxPosition = -(totalCards - visibleCards) * cardWidth;

  const handleRightArrowClick = () => {
    if (currentPosition > maxPosition) {
      setCurrentPosition(currentPosition - cardWidth);
    }
  };

  const handleLeftArrowClick = () => {
    if (currentPosition < 0) {
      setCurrentPosition(currentPosition + cardWidth);
    }
  };

  return (
    <div className="flex items-center relative w-[400px]">
      <div
        className="text-2xl cursor-pointer p-2 bg-gray-300 rounded-full mx-2 hover:bg-gray-400"
        onClick={handleLeftArrowClick}
      >
        &#9664;
      </div>
      <div className="overflow-hidden w-[300px]">
        <div
          className="flex transition-transform duration-300 ease"
          style={{ transform: `translateX(${currentPosition}px)` }}
        >
          {Children.map(children, (child, index) => (
            <div key={index} className="min-w-[100px] mx-2">
              {child}
            </div>
          ))}
        </div>
      </div>
      <div
        className="text-2xl cursor-pointer p-2 bg-gray-300 rounded-full mx-2 hover:bg-gray-400"
        onClick={handleRightArrowClick}
      >
        &#9654;
      </div>
    </div>
  );
};

export default CardSlider;
