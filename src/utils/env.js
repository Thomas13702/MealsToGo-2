import { LIVEHOST } from "@env";

const LOCALHOST =
  "https://6ee0-2a00-23c6-761b-ba01-ada1-236a-b58d-5baf.ngrok.io/mealstogo-c4b4c/us-central1";

const environment = process.env.NODE_ENV || "development";

export const isDevelopment = environment === "development";

export const host = isDevelopment ? LOCALHOST : LIVEHOST;

export const isMock = true;
