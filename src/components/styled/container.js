import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  width: 100%;
  height : 100%;
  color: ${props => `${props.theme.colors.text}`};
  background-color: ${props => props.theme.colors.primary};
  transition : all 1s;
  font-family: ${props => props.theme.fonts[0]};
`;