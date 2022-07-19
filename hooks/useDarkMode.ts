import React, { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const darkModeAtom = atom<boolean>({
  key: "darkMode",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export function useDarkMode() {
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [darkModeStored, setDarkModeStored] = useRecoilState(darkModeAtom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [
    isInitial === true ? false : darkModeStored,
    setDarkModeStored,
  ] as const;
}
