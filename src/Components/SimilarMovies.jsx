// SimilarMovies
// import axios from 'axios';
import { useState, useEffect } from 'react';
import getSimilarMovies from './getSimilarMovies';
// import languageArray from './languageArray';
import MovieCard from './MovieCard';
// import ISO6391 from 'iso-639-1';

const SimilarMovies = ({ id }) => {
  const [movieSuggestions, setMovieSuggestions] = useState([]);

  useEffect(() => {
    if (id) {
      setMovieSuggestions([]);
      getSimilarMovies(id, setMovieSuggestions);
    }
  }, [id]);

  const sayMyName = (movie) => {
    console.log(movie.title, movie.original_language, movie.poster_path);
  };

  return (
    <>
      <p>Movies Suggestions</p>

      {movieSuggestions.length &&
        movieSuggestions.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleClick={() => sayMyName(movie)}>
              <p>{movie.language}</p>
            </MovieCard>
          );
        })}
    </>
  );
};

export default SimilarMovies;
