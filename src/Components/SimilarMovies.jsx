// SimilarMovies
import { useState, useEffect } from 'react';
import getSimilarMovies from './getSimilarMovies';
import MovieCard from './MovieCard';

const SimilarMovies = ({ searchedMovie, id, recommendedArray, setRecommendedArray }) => {
  const [movieSuggestions, setMovieSuggestions] = useState([]);
  // const [recommendedArray, setRecommendedArray] = useState([]);

  useEffect(() => {
    if (id) {
      setMovieSuggestions([]);
      getSimilarMovies(id, setMovieSuggestions);
    }
  }, [id]);

  const addToRecommendedArray = (movie) => {

    let repeatedMovie = false;
    recommendedArray.forEach((selectedMovie) => {
      if (selectedMovie.id === movie.id) {
        repeatedMovie = true;
      }
    });

    if (!repeatedMovie) {
      setRecommendedArray([...recommendedArray, {
        title: movie.title,
        year: movie.year,
        language: movie.language,
        poster: movie.poster_path,
        id: movie.id
      }]);
    }


  };

  const pushPairToFirebase = () => {

    console.log(searchedMovie, recommendedArray);

  }

  return (
    <>
      <p>Movies Suggestions</p>

      {movieSuggestions.length
        ? movieSuggestions.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              setSearchedMovie={() => addToRecommendedArray(movie)}
              setRecommendedArray={setRecommendedArray}>
              <p>{movie.language}</p>
            </MovieCard>
          );
        })
        : ''}
      <button onClick={pushPairToFirebase}>Save</button>
    </>
  );
};

export default SimilarMovies;
