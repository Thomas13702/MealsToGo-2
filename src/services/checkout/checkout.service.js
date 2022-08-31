import createStripe from "stripe-client";
import { PUBLISHABLE_KEY } from "@env";
import { host } from "../../utils/env";

const stripe = createStripe(PUBLISHABLE_KEY);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      amount,
      name,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something Went Wrong with the Payment");
    }
    return res.json();
  });
};
