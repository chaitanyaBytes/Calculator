import { atom } from "recoil";

export const numberState = atom({
  key: "numberState",
  default: 0,
});

export const operatorState = atom({
  key: "operatorState",
  default: "",
});

export const displayState = atom({
  key: "displayState",
  default: "0",
});
