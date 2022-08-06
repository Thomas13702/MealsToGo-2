import React from "react";
import { AccountBackground, AccountCover } from "../components/account.styles";
import { View, Text } from "react-native";

export const AccountScreen = () => {
  return (
    <AccountBackground image={require("../../../../assets/home_bg.jpg")}>
      <AccountCover />
    </AccountBackground>
  );
};
