import React from "react";
import { AccountBackground } from "../components/account.styles";
import { View, Text } from "react-native";

export const AccountScreen = () => {
  return (
    <AccountBackground image={require("../../../../assets/home_bg.jpg")}>
      {
        <View>
          <Text>Account Screen</Text>
        </View>
      }
    </AccountBackground>
  );
};
