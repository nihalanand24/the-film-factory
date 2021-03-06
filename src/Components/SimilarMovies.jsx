// SimilarMovies.jsx

import { withRouter } from 'react-router-dom';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';
import getSimilarMovies from './getSimilarMovies';
import MovieCard from './MovieCard';
import Filter from './Filter.jsx';

const SimilarMovies = ({ history, searchedMovie, id, recommendedArray, setRecommendedArray }) => {
  const [movieSuggestions, setMovieSuggestions] = useState([]);
  const [selectedArray, setSelectedArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [availableLanguages, setAvailableLanguages] = useState([]);
  const [filterLang, setFilterLang] = useState('');
  const [availableGenres, setAvailableGenres] = useState([]);
  const [filterGenre, setFilterGenre] = useState('');

  useEffect(() => {
    if (id) {
      getSimilarMovies(id, setMovieSuggestions, setLoading, setAvailableLanguages, setAvailableGenres);
      setLoading(true);
    }
  }, [id]);

  const addToRecommendedArray = (movie) => {
    let repeatedMovie = false;
    recommendedArray.forEach((selectedMovie) => {
      if (selectedMovie.id === movie.id) {
        repeatedMovie = true;
        const cursor = recommendedArray.indexOf(selectedMovie);
        const selectedCursor = selectedArray.indexOf(selectedMovie.id);
        const tempSelectArray = [...selectedArray];
        const tempArray = [...recommendedArray];
        tempSelectArray.splice(selectedCursor, 1);
        setSelectedArray(tempSelectArray);
        tempArray.splice(cursor, 1);
        setRecommendedArray(tempArray);
      }
    });

    if (!repeatedMovie) {
      if (recommendedArray.length === 3) {
        alert('You have selected the maximum of 3 movies.');
        const tempArray = [...recommendedArray].slice(0, 3);
        setRecommendedArray(tempArray);
      } else {
        setSelectedArray([...selectedArray, movie.id]);
        setRecommendedArray([
          ...recommendedArray,
          {
            title: movie.title,
            year: movie.year,
            language: movie.language,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            id: movie.id,
          },
        ]);
      }
    }
  };

  const pushPairToFirebase = () => {
    const usersMovie = {
      title: searchedMovie.title,
      poster: `https://image.tmdb.org/t/p/w500${searchedMovie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${searchedMovie.backdrop_path}`,
      id: searchedMovie.id,
      year: searchedMovie.release_date.slice(0, 4),
    };

    const dbRef = firebase.database().ref();

    history.push("/allTimeResults");

    recommendedArray.forEach((movie) => {
      dbRef.push({
        searchedMovie: usersMovie,
        similarMovie: movie,
      });
    });
  };

  return (
    <div className='matchedMovies foreign'>
      <h2>Foreign Language Films You Might Like</h2>

      <div className='saveMoviesRow'>
        <div className="saveButtonPanel">
          <h3>Add up to three films to the saved list.</h3>
          {recommendedArray.length ? (

            <button onClick={pushPairToFirebase}>Save</button>

          ) : (
            <button disabled>Save</button>
          )}
        </div>

        <div className='filters'>
          <Filter
            setFilter={setFilterLang}
            filterBy={'language'}
            options={availableLanguages}
          />
          <Filter
            setFilter={setFilterGenre}
            filterBy={'genre'}
            options={availableGenres}
          />
        </div>
      </div>

      <div className='lowerMovieCardContainer'>
        {loading ? (
          <div className='resultsStatus'>
            <div className='loadingBar'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : movieSuggestions.length ? (
          movieSuggestions
            .filter((movie) =>
              filterLang ? movie.language === filterLang : movie
            )
            .filter((movie) =>
              filterGenre ? movie.genres.includes(filterGenre) : movie
            )
            .map((movie) => {
              return (
                <MovieCard
                  selectedArray={selectedArray}
                  key={movie.id}
                  movie={movie}
                  setSearchedMovie={() => addToRecommendedArray(movie)}
                  setRecommendedArray={setRecommendedArray}
                  setShowSuggestedFilms={() => void 0}>
                  <p>{movie.language}</p>
                </MovieCard>
              );
            })
        ) : (
          <div className='resultsStatus'>
            <p>No recommended movies available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(SimilarMovies);
