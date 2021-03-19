// AutoCompleteSuggestions.jsx
// Solution to use arrow keys to move through autocomplete suggestions
// adapted from 'Roving focus in react with custom hooks' by Rafi
// https://dev.to/rafi993/roving-focus-in-react-with-custom-hooks-1ln
// accessed on 03/18/2020

import { useCallback, useEffect, useRef } from 'react';

const AutoCompleteSuggestions = ({ movie, focus, index, setFocus, setName, }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    setFocus(index);
  }, [index, setFocus]);

  return (
    <li>
      <button
        tabIndex={focus ? 0 : -1}
        ref={ref}
        onClick={() => setName(movie)}
        onKeyPress={handleSelect}>
        {movie}
      </button>
    </li>
  );
};

export default AutoCompleteSuggestions;
