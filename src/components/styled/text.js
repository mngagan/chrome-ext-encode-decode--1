import styled from "styled-components";
import React from "react";

export const Text = styled.text`
  color: ${props => `${props.theme.colors.text}`};
  transition : all 1s
`;