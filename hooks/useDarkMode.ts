import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useMedia from "./useMedia";

function usePrefersDarkMode() {
  return useMedia<boolean>(["(prefers-color-scheme: dark"], [true], false);
}

function useDarkMode() {
  // Use our useLocalStorage hook to persist state through a page refresh
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    "dark-mode-enabled",
    false,
  );

  // See if user has set a browser or OS preference for dark mode.
  const prefersDarkMode = usePrefersDarkMode();

  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled = enabledState ?? prefersDarkMode;

  useEffect(() => {
    const className = "dark-mode";
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState];
}

export default useDarkMode;
