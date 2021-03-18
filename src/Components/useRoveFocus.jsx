// Solution to use arrow keys to move through autocomplete suggestions
// adapted from 'Roving focus in react with custom hooks' by Rafi 
// https://dev.to/rafi993/roving-focus-in-react-with-custom-hooks-1ln
// accessed on 03/18/2020

import { useCallback, useState, useEffect } from "react";

function useRoveFocus(size) {
  const [currentFocus, setCurrentFocus] = useState(0);

  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 40) {
        // Down arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.keyCode === 38) {
        // Up arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      } else {
        setCurrentFocus(-1);
      }
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
}

export default useRoveFocus;

