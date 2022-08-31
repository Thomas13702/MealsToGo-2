import { LIVEHOST } from "@env";

const LOCALHOST =
  "https://ba63-2a00-23c6-761b-ba01-8008-d7fc-ef8f-f13e.ngrok.io/mealstogo-c4b4c/us-central1";

const environment = process.env.NODE_ENV || "development";

export const isDevelopment = environment === "development";

export const host = isDevelopment ? LOCALHOST : LIVEHOST;

export const isMock = true;
