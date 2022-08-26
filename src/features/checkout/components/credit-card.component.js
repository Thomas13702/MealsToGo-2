import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import createStripe from "stripe-client";
import { PUBLISHABLE_KEY } from "@env";

const stripe = createStripe(PUBLISHABLE_KEY);

export const CreditCardInput = () => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    console.log(isIncomplete);

    const card = {
      number: "4242424242424242",
      exp_month: "02",
      exp_year: "24",
      cvc: "244",
      name: "Mo",
    };

    const info = await stripe.createToken({ card });
    console.log(info);
  };

  return (
    <LiteCreditCardInput
      autoFocus={true}
      inputStyle={{
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        height: 40,
        width: "100%",
      }}
      labelStyle={{
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        height: 40,
        width: "100%",
      }}
      onChange={onChange}
    />
  );
};
