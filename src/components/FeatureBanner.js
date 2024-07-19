import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledSlideshowContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: ${theme.radius.radiusMd};
  position: relative;
`;

const StyledSlideshowWrapper = styled.div`
  display: flex;
  transition: ${({ isAnimating }) =>
    isAnimating ? "transform 0.5s ease-in-out" : "none"};
  transform: translateX(${({ currentIndex }) => -currentIndex * 100}%);
`;

const StyledSlide = styled.div`
  width: 100%;
  flex-shrink: 0;
  background-color: ${theme.color.primary};
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledFeatureTitle = styled.div`
  ${theme.fontstyle.display}
  color: ${theme.color.black};
`;

function dointerval(intervalRef, setIsAnimating, setCurrentIndex, slidesWithLoop) {
  intervalRef.current = setInterval(() => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;

      if (newIndex == slidesWithLoop.length) {
        setIsAnimating(false);
        setCurrentIndex(0);
        clearInterval(intervalRef.current);
        return 0;
      }
      return newIndex;
    });
  }, 500);
}

function FeatureBanner({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const intervalRef = useRef(null);
  const slidesWithLoop = [...slides, slides[0]];
  var flag = false;

  useEffect(() => {
    const cleanup = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;

        if (newIndex === slidesWithLoop.length) {
          setIsAnimating(false);
          setCurrentIndex(0);
          flag = true;
          return 0;
        }
        return newIndex;
      });
    }, 1000); 

    return cleanup;
  }, []);

  return (
    <StyledSlideshowContainer>
      <StyledSlideshowWrapper currentIndex={currentIndex} isAnimating={isAnimating}>
        {slidesWithLoop.map((slide, index) => (
          <StyledSlide
            key={index}
            style={{ backgroundColor: slide.color }}
            onClick={() => alert(`Slide ${index + 1} clicked!`)}>
            <StyledFeatureTitle>{slide.title}</StyledFeatureTitle>
          </StyledSlide>
        ))}
      </StyledSlideshowWrapper>
    </StyledSlideshowContainer>
  );
}

// Example usage of FeatureBanner
const slides = [
  { title: "슬라이드 1", color: theme.color.darkgray },
  { title: "슬라이드 2", color: theme.color.primary },
  { title: "슬라이드 3", color: theme.color.gray500 },
  { title: "슬라이드 4", color: theme.color.gray500 },
  { title: "슬라이드 5", color: theme.color.gray500 },
];

export default function BannerBanner() {
  return (
    <div>
      <FeatureBanner slides={slides} />
    </div>
  );
}