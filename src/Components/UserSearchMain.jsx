import { useState } from 'react';
import '../styles/App.scss'
import MovieSearchResults from './MovieSearchResults';
import SimilarMovies from './SimilarMovies';

function UserSearchMain({ movieToSearch }) {

  const [searchedMovie, setSearchedMovie] = useState({});
  // const [movieToSearch, setMovieToSearch] = useState("");
  const [recommendedArray, setRecommendedArray] = useState([]);

  const [showSuggestedFilms, setShowSuggestedFilms] = useState(false);

  return (
    <div className="wrapper centralContainer">

      {/* <SearchBar setSearch={setMovieToSearch} /> */}

      <div className="matchedMovies searchResults">
        <h2 onClick={(() => setShowSuggestedFilms(false))}>Top results found for "{movieToSearch}"</h2>

        {!showSuggestedFilms
          ? <MovieSearchResults setSearchedMovie={setSearchedMovie} movieToSearch={movieToSearch} setRecommendedArray={setRecommendedArray} setShowSuggestedFilms={setShowSuggestedFilms} />
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
