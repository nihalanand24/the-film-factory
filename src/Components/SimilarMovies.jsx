// SimilarMovies
import { useState, useEffect } from 'react';
import getSimilarMovies from './getSimilarMovies';
import MovieCard from './MovieCard';

const SimilarMovies = ({ searchedMovie, id }) => {
  const [movieSuggestions, setMovieSuggestions] = useState([]);
  const [recommendedArray, setRecommendedArray] = useState([]);

  useEffect(() => {
    if (id) {
      setMovieSuggestions([]);
      getSimilarMovies(id, setMovieSuggestions);
    }
  }, [id]);

  const addToRecommendedArray = (movie) => {
    setRecommendedArray([...recommendedArray, {
      title: movie.title,
      year: movie.year,
      language: movie.language,
      poster: movie.poster_path,
    }]);

    console.log(searchedMovie, movie);
  };

  return (
    <>
      <p>Movies Suggestions</p>

      {movieSuggestions.length
        ? movieSuggestions.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                setSearchedMovie={() => addToRecommendedArray(movie)}>
                <p>{movie.language}</p>
              </MovieCard>
            );
          })
        : ''}
    </>
  );
};

export default SimilarMovies;
