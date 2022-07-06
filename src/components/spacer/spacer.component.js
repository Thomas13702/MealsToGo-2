import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const TopSmall = styled.View`
  margin-top: 4px;
`;

const TopMedium = styled.View`
  margin-top: 8px;
`;

const TopLarge = styled.View`
  margin-top: 16px;
`;

const LeftSmall = styled.View`
  margin-left: 4px;
`;

const LeftMedium = styled.View`
  margin-left: 8px;
`;

const LeftLarge = styled.View`
  margin-left: 16px;
`;

export const Spacer = ({ variant }) => {
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  if (variant === "left.medium") {
    return <LeftMedium />;
  }
  if (variant === "left.large") {
    return <LeftLarge />;
  }
  if (variant === "left.large") {
    return <LeftLarge />;
  }
  return <TopSmall />;
};
