import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";

const StyledBackgroundImage = styled(ImageBackground)`
  flex: 1;
  justifycontent: "center";
  align-items: center;
`;

export const AccountBackground = ({ children, image }) => {
  return (
    <StyledBackgroundImage source={image}>{children}</StyledBackgroundImage>
  );
};

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;
