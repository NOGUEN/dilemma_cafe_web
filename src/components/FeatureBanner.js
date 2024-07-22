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
  const [loopSlides, setLoopSlides] = useState([...slides, slides[0]]);
  const [isAnimating, setIsAnimating] = useState(true);
  const initialSlidesLength = slides.length;
  const interval = 1000;

  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, interval);

    return () => clearInterval(intervalId);
  }, [initialSlidesLength, slides]);

  useEffect(() => {
    if (currentIndex === initialSlidesLength) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(0);
        setLoopSlides([...slides, slides[0]]);
      }, 500);
    }
  }, [currentIndex, initialSlidesLength, slides]);

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