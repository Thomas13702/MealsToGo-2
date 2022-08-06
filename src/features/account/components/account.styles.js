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
