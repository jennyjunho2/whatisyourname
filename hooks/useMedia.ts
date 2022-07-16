import { useEffect, useState } from "react";

// utilize media queries in your component logic
const useMedia = <T>(queries: string[], values: T[], defaultValue: T) => {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map((query) => window.matchMedia(query));

  // function that gets value based on matching media query
  const getValue = () => {
    const index = mediaQueryLists.findIndex((match) => match.matches);
    return values?.[index] || defaultValue;
  };

  const [value, setValue] = useState<T>(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((match) => match.addListener(handler));
    return () =>
      mediaQueryLists.forEach((match) => match.removeListener(handler));
  }, []);

  return value;
};

export default useMedia;
