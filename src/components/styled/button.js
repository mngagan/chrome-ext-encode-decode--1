import styled from "styled-components";
import React from "react";

export const Button = styled.button`
  color: ${props => `${props.theme.colors.text}`};
  transition : all 1s;
  border : 1px solid ${props => `${props.theme.colors.text}`};
  background-color : ${props => `${props.theme.colors.primary}`};
  border-radius : 5px;
`;