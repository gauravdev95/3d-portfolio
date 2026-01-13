import React from "react";
import styled from "styled-components";

// Styled component for the stars canvas background
const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    #1f1f1f 0%,   // Dark shade
    #2c2c2c 100%  // Slightly lighter shade
  );
  z-index: -1; // Keep behind content
`;

// StarsCanvas component to render the styled background
const StyledStarsCanvas = () => {
  return <StyledCanvasWrapper />;
};

export default StyledStarsCanvas;
