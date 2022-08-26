import createStripe from "stripe-client";
import { PUBLISHABLE_KEY } from "@env";

const stripe = createStripe(PUBLISHABLE_KEY);

export const cardTokenRequest = (card) => stripe.createToken({ card });
