import styled from "styled-components";
import React from "react";

export const H1 = styled.h1`
  color: ${props => `${props.theme.colors.text}`};
  font-size : 2em;
  text-align : center;
  transition : all 1s;
`;