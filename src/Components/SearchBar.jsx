// SearchBar
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import AutoComplete from './AutoComplete';
import getAutoComplete from './getAutoComplete';
import getSearchResults from './getSearchResults';

const SearchBar = ({
  setResultsFound,
  setMovieArray,
  history,
  setSearchedMovieTitle,
}) => {
  const [movieName, setMovieName] = useState('');
  const [suggestions, setSuggestions] = useState([]);


  useEffect(() => {

    let mounted = true;
    const getData = async () => {
      const autoComp = await getAutoComplete(movieName);
      if (mounted) {
        setSuggestions(autoComp.slice(0,5));
      }
    }

    getData();

    return () => {
      mounted = false;
    }
    
  }, [movieName]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const getData = async () => {
      const englishMovies = await getSearchResults(movieName);

      setSearchedMovieTitle(movieName);

      if (!englishMovies.length) {
        setResultsFound(false);
        setMovieArray([]);
      } else {
        history.push('/movieSearch');
        setMovieArray(englishMovies.slice(0, 5));
      }
    };

    getData();

};

  return (
    <form className='movieSearchForm' onSubmit={handleSubmit} defaultValue={movieName}>
      <div className='movieSearchBox'>
        <label htmlFor='searchMovie' className='sr-only'>
          search for a movie
        </label>
        <input
          required
          onChange={(e) => setMovieName(e.target.value)}
          type='text'
          id='searchMovie'
          value={movieName}
          placeholder='search for a movie'
          autoComplete='off'
        />

        {movieName.length ? (
          <AutoComplete suggestions={suggestions} setSelected={setMovieName}/>
          
        ) : null}

        <button type='submit'>Search</button>
      </div>
    </form>
  );
};

export default withRouter(SearchBar);
