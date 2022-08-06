import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";

const StyledBackgroundImage = styled(ImageBackground)`
  flex: 1;
  align-items: center;
  justify-content: center;
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

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;
