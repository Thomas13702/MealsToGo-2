import { LIVEHOST, LOCALHOST } from "@env";

// console.log(LOCALHOST);

const environment = process.env.NODE_ENV || "development";

export const isDevelopment = environment === "development";

export const host = isDevelopment ? LOCALHOST : LIVEHOST;

// export const host = LIVEHOST;

export const isMock = true;
