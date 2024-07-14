import React from "react";
import styled, { css } from "styled-components";

const StyledSquareButton = styled.button`
  width: 200px;
  height: 200px;
  display: flex;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
`;

function SquareButton({ children, ...props }) {
  return (
    <>
    <StyledSquareButton {...props}>{children}</StyledSquareButton>
    </>
  );
}

export default SquareButton;