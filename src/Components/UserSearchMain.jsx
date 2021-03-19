// UserSearchMain.jsx

import { useState } from 'react';
import '../styles/App.scss'
import MovieSearchResults from './MovieSearchResults';
import SimilarMovies from './SimilarMovies';

function UserSearchMain({ movieArray, searchedMovieTitle }) {

  const [searchedMovie, setSearchedMovie] = useState({});
  const [recommendedArray, setRecommendedArray] = useState([]);
  const [showSuggestedFilms, setShowSuggestedFilms] = useState(false);

  return (
    <div className="wrapper centralContainer">
      <div className="matchedMovies searchResults">
        <h2 onClick={(() => setShowSuggestedFilms(false))}>Top results found for "{searchedMovieTitle}"</h2>

        {!showSuggestedFilms
          ? <MovieSearchResults setSearchedMovie={setSearchedMovie} setRecommendedArray={setRecommendedArray} setShowSuggestedFilms={setShowSuggestedFilms} movieArray={movieArray} />
          : null
        }
      </div>

      {showSuggestedFilms
        ? <SimilarMovies searchedMovie={searchedMovie} id={searchedMovie.id} setRecommendedArray={setRecommendedArray} recommendedArray={recommendedArray} />
        : null}
    </div>
  );
}

export default UserSearchMain;
