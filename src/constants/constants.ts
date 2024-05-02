import { PublicKey } from "@solana/web3.js";

export const PRESALE_PROGRAM_PUBKEY = new PublicKey(
  "9XVrUktfDzVjFLqU3dMNdmPkNon3BAdpURiAYLcVEnGe"
);

export const TOKEN_PUBKEY = new PublicKey(
  "BUDNS9JNrwjixKLoqhaQHz4x1HspWaDUXYVGRm2kWrf4"
);

export const PRESALE_SEED = "DVN_PRESALE_SEED";
export const USER_SEED = "DVN_USER_SEED";
export const PRESALE_ID = 1;

export const PRESALE_AUTHORITY = new PublicKey(
  "FvrR5ZYir5JKRTaGEYJz2tJ9Voe4WWeQZxrW9Jv774AQ"
);

export const TOKEN_PRESALE_HARDCAP = 4000000000; // token
export const PRICE_PER_TOKEN = 0.0000002; // sol

export const BUYER_SOFTCAP = 0.2; // sol
export const BUYER_HARDCAP = 50; // sol
export const BUYER_TOKEN_HARDCAP = 250000000; // token

export const TOKEN_DECIMAL = 9;
