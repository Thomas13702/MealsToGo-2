import React, { useState, useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error } = useContext(AuthenticationContext);
  console.log(error);

  return (
    <AccountBackground image={require("../../../../assets/home_bg.jpg")}>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
