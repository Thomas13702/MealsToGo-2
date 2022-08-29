import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCardInput = ({ nam = "Tom" }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    // console.log(isIncomplete);

    const expiry = values.expiry.split("/");

    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: "Mo",
    };

    const info = await cardTokenRequest(card);
    console.log(info);
  };

  return (
    <LiteCreditCardInput
      // autoFocus={true}
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
