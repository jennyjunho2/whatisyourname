import { atom } from "recoil";

export const isMobileSideViewOpen = atom<boolean>({
  key: "isMobileSideViewOpen",
  default: false,
});

export const isMobileView = atom<boolean>({
  key: "isMobileView",
  default: false,
});
