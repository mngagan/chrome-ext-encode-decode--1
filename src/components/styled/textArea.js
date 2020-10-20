import styled from "styled-components";
import React from "react";

export const TextArea = styled.textarea`
  color: ${props => `${props.theme.colors.text}`};
  background-color : ${props => `${props.theme.colors.primary}`};
  transition : all 1s ;
  width : 100%;
  border : 1px solid ${props => `${props.theme.colors.text}`};
  border-radius : 5px;
`;
