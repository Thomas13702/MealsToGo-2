import { LIVEHOST } from "@env";

const LOCALHOST =
  "https://c03d-86-137-161-92.ngrok.io/mealstogo-c4b4c/us-central1";

const environment = process.env.NODE_ENV || "development";

export const isDevelopment = environment === "development";

export const host = isDevelopment ? LOCALHOST : LIVEHOST;

export const isMock = true;
