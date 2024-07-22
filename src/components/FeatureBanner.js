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

function FeatureBanner({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [loopSlides, setLoopSlides] = useState([...slides]);
  const initialSlidesLength = loopSlides.length;
  const interval = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoopSlides((prevLoopSlides) => {
        const newLoopSlides = [...prevLoopSlides, loopSlides[currentIndex]];
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === initialSlidesLength) {
          setCurrentIndex(0);
          return newLoopSlides.splice(0, initialSlidesLength);
        }
        return newLoopSlides;
      })
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex]);


  return (
    <StyledSlideshowContainer>
      <StyledSlideshowWrapper currentIndex={currentIndex} isAnimating={isAnimating}>
        {loopSlides.map((slide, index) => (
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