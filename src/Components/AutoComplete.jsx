// UseRoveFocus adapted from 
//'Roving focus in react with custom hooks' by Rafi 
// to allow arrow keys to move through autocomplete suggestions
// https://dev.to/rafi993/roving-focus-in-react-with-custom-hooks-1ln
// accessed on 03/18/2020

import AutoCompleteSuggestions from './AutoCompleteSuggestions';
import useRoveFocus from './useRoveFocus';

const AutoComplete = ({suggestions, setSelected}) => {
    const [focus, setFocus] = useRoveFocus(suggestions.length);
    
    return (
        <ul className='autoComplete'>
              <li><button className="hiddenButton" aria-hidden></button></li>
              {suggestions.map((movie, index) => 
                <AutoCompleteSuggestions key={index} setFocus={setFocus} index={index} focus={focus === index} movie={movie} setName={setSelected}/>
              )}
          </ul>
    )
}

export default AutoComplete
